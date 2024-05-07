import React from "react";

const RightChevronSvg = ({style={}, onClick=() => {}}) => {
  return (
    <div style={{...style}} className="chevron" onClick={onClick}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M7.5 5L12.5 10L7.5 15"
          stroke="#378760"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default RightChevronSvg;
