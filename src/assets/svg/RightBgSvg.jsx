import React from "react";

const RightBgSvg = ({style={}}) => {
  return (
    <div className="right_bg_svg" style={{...style}}>
      <svg
        width="286"
        height="225"
        viewBox="0 0 286 225"
        fill="none"
      >
        <path
          d="M120 160.517L540 108V172L120 224.517V160.517Z"
          fill="#EDF9F1"
        />
        <path d="M0 125.808L612 49V113L0 189.808V125.808Z" fill="#CCE7E0" />
        <path d="M83 52.517L503 0V64L83 116.517V52.517Z" fill="#378760" />
      </svg>
    </div>
  );
};

export default RightBgSvg;
