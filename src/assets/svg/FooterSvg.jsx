import React from "react";

const FooterSvg = ({style={}}) => {
  return (
    <div className="footer_svg" style={{...style}}>
      <svg
        width="382"
        height="198"
        viewBox="0 0 382 198"
        fill="none"
      >
        <path d="M-38 52.517L382 0V64L-38 116.517V52.517Z" fill="#CCE7E0" />
        <path
          d="M-190 135.506L230 82.9893V146.989L-190 199.506V135.506Z"
          fill="#EDF9F1"
        />
      </svg>
    </div>
  );
};

export default FooterSvg;
