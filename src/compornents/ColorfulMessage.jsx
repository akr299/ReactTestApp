import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  // console.log("color");
  const contentStyle = {
    color,
    fontSize: "18.px"
  };

  return <p style={contentStyle}>{children}</p>;
};
// export default ColorfulMessage;
