const { mount } = await import("marketings/MarketingApp");
import React, { useRef, useEffect } from "react";
console.log(mount);
const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};

export default MarketingApp;
