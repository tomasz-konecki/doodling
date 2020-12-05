import React from "react";
import CountTo from "react-count-to";

function Counter() {
  return (
    <div style={{ fontSize: 22 }}>
      <CountTo from={1981} to={2021} speed={10000} />
    </div>
  );
}

export default Counter;
