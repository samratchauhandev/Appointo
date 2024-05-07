import React from "react";
import RightChevronSvg from "../assets/svg/RightChevronSvg";

function CalendarFooterCard() {
  return (
    <>
      <div className="powered_by_title">POWERED BY APPOINTO</div>
      <div>
        <button className="fotter_button">
          <span style={{marginRight: "8px", fontWeight: 600}}>Next</span> 
          <RightChevronSvg />
        </button>
      </div>
    </>
  );
}

export default CalendarFooterCard;
