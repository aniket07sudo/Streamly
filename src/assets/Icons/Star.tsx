import React from "react";
import {Svg,Path} from "react-native-svg";

function Icon({fill,width,height}) {

  
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}`}
      height={`${height}`}
      fill="none"
      viewBox="0 0 16 16"
    >
      <Path
        fill={fill}
        d="M11.707 14a.666.666 0 01-.307-.073L8 12.147l-3.4 1.78a.666.666 0 01-.967-.707L4.3 9.467 1.553 6.8a.667.667 0 01-.166-.667.667.667 0 01.54-.453l3.8-.553L7.4 1.707a.667.667 0 011.2 0l1.693 3.413 3.8.553a.667.667 0 01.54.454.666.666 0 01-.166.666L11.72 9.46l.667 3.753a.666.666 0 01-.267.667.667.667 0 01-.413.12z"
      ></Path>
    </Svg>
  );
}

export default Icon;
