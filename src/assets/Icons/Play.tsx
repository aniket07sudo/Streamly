import React from "react";
import {Svg,Path} from "react-native-svg";


function Icon({fill}:any) {
  return (
    <Svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 11 13"
    >
      <Path
        fill={fill}
        d="M0 1.001v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 000-1.69L1.54.161a.998.998 0 00-1.54.84z"
      ></Path>
    </Svg>
  );
}

export default Icon;
