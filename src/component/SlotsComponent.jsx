import React, { useEffect, useRef, useState } from "react";
import CheckSvg from "../assets/svg/CheckSvg";
import { fetchSlots } from "../redux/slotes/action";
import { extractTimeWithIos } from "../tools/extractTimeWithIos";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateDuration,
  dateFormater,
  getDay,
  getMonth,
  isObjectInArray,
} from "../tools/helper";
import RightChevronSvg from "../assets/svg/RightChevronSvg";

function SlotsComponent({ selectedDate }) {
  const [selectedDateData, setSelectedDateData] = useState([]);
  const [avilaleDurations, setAvilaleDurations] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(0);
  const [clickedSlot, setClickedSlot] = useState(0);

  const data = useSelector((state) => state.slots); // Selecting data from the Redux store
  const dispatch = useDispatch();

  const handelSelectedSlot = (index) => {
    setClickedSlot(index);
  };
  useEffect(() => {
    dispatch(fetchSlots());
  }, []);

  useEffect(() => {
    let duration = [];
    const temp = data.filter(({ date }) => {
      return date === dateFormater(selectedDate);
    });
    setSelectedDateData(temp);
    temp.forEach((item) => {
      item.slots.forEach(({ start_time, end_time }, idx) => {
        const { hours, minutes, seconds } = calculateDuration(
          start_time,
          end_time
        );

        if (
          !isObjectInArray(
            { hours: hours, minutes: minutes, seconds: seconds },
            duration
          )
        ) {
          duration.push({ hours: hours, minutes: minutes, seconds: seconds });
        }
      });
    });
    setAvilaleDurations(duration);
  }, [selectedDate]);
  return (
    <div className="slots_main_container">
      <div className="time_container">
        <div>SELECT FROM VARIANTS</div>
        <div className="custom_selector_container">
          <select
            value={selectedSlot}
            className="time_option"
            onChange={(event) => {
              setSelectedSlot(event.target.value);
            }}
          >
            {avilaleDurations.map(({ hours, minutes, seconds }, idx) => (
              <option key={idx} value={idx}>{`${hours ? `${hours} hr` : ""} ${
                minutes ? `${minutes} min` : ""
              } ${seconds ? `${seconds} sec` : ""}`}</option>
            ))}
          </select>
          <RightChevronSvg />
        </div>
      </div>
      <div
        style={{ borderTop: "1px solid #C7C9D9", margin: "0px 40px 20px 40px" }}
      ></div>
      <div className="slot_title">
        {`${getDay[selectedDate.getDay()].toUpperCase()}, ${
          getMonth[selectedDate.getMonth()]
        } ${selectedDate.getDate()} `}
        - AVALIABLE SLOTS
      </div>
      <div className="slots_avaliable">
        {selectedDateData.length !== 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "15px",
            }}
          >
            {selectedDateData.map((item) =>
              item.slots.map((times, idx) => (
                <SlotCard
                  handelSelectedSlot={handelSelectedSlot}
                  idx={idx}
                  selected={clickedSlot == idx}
                  key={`${times.start_time}-${times.end_time}`}
                  duration={`${extractTimeWithIos(
                    times.start_time
                  )} - ${extractTimeWithIos(times.end_time)}`}
                />
              ))
            )}
          </div>
        ) : (
          <div>No Avilable Slots</div>
        )}
      </div>
    </div>
  );
}

const SlotCard = ({ handelSelectedSlot, duration, idx, selected = false }) => {
  return (
    <div onClick={() => handelSelectedSlot(idx)}>
      {!selected ? (
        <div className="slots_avaliable_timing">
          <span>{duration}</span>
        </div>
      ) : (
        <div
          className="slots_avaliable_timing"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#378760",
            padding: "13.5px 12px",
            color: "#fff",
          }}
        >
          <span>{duration}</span>
          <CheckSvg />
        </div>
      )}
    </div>
  );
};

export default SlotsComponent;
