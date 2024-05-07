import React from "react";
import Calendar from "../component/CalendarComponent";
import CalendarFooterCard from "./CalendarFooterCard";
import SlotsComponent from "../component/SlotsComponent";
import { useState } from "react";

function Appointment() {
  const [state, setState] = useState(new Date());

  const handelerTimeFromSibling = (time) => {
    setState(time);
  };

  return (
    <div className="appointment_container">
      <div className="appintment_main">
        <div className="calender_container">
          <Calendar handelerTimeFromSibling={handelerTimeFromSibling} />
        </div>
        <div className="slot_container">
          <SlotsComponent selectedDate={state} />
        </div>
      </div>
      <div className="footer">
        <CalendarFooterCard />
      </div>
    </div>
  );
}

export default Appointment;
