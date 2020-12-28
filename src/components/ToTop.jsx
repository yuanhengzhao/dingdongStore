import React from "react";
import BackToTop from "react-back-to-top";

const ToTop = () => (
  <BackToTop showOnScrollUp showAt={100} speed={1500} easing='easeInOutQuint'>
    <span>scroll up</span>
  </BackToTop>
);
export default ToTop;
