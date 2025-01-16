import React from "react";

const CoupangDynamicBanner = ({ unit }) => {
  const unitMapper = {
    introBanner: {
      src: "https://ads-partners.coupang.com/widgets.html?id=831916&template=carousel&trackingCode=AF7106359&subId=&width=300&height=300&tsource=",
      width: "300",
      height: "300",
    },
    resultBanner: {
      src: "https://ads-partners.coupang.com/widgets.html?id=831916&template=carousel&trackingCode=AF7106359&subId=&width=300&height=300&tsource=",
      width: "300",
      height: "300",
    },
  };
  return (
    <div>
      <iframe
        src={unitMapper[unit].src}
        width={unitMapper[unit].width}
        height={unitMapper[unit].height}
        frameBorder="0"
        scrolling="no"
        referrerPolicy="unsafe-url"
      ></iframe>
    </div>
  );
};

export default CoupangDynamicBanner;
