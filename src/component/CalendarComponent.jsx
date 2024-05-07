import React,{useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import RightChevronSvg from "../assets/svg/RightChevronSvg";

function CalendarComponent({handelerTimeFromSibling}) {

  const [date ,setDate] =useState("")

  return (
    <>
      <div className="calendar_header">
        <div className="claender_titel">
          Test Service
        </div>
        <div className="calendar_timezone">
          Timezone <span className="calendar_region">Asia/Calcutta</span>
        </div>
      </div>
      <div className="calendar_container">
      <Calendar
        nextLabel={<RightChevronSvg />}
        prevLabel={<RightChevronSvg style={{ transform: "rotate(180deg)" }} />}
        onClickDay ={(value) => handelerTimeFromSibling(value)}
        calendarType="hebrew"
      />
    </div>
    </>
  );
}

export default CalendarComponent;
