import React from "react";
import {Svg,Path} from "react-native-svg";

function Icon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={props.fill}
        d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0019 11a8 8 0 10-8 8 7.92 7.92 0 004.9-1.69l3.39 3.4a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095zM5 11a6 6 0 1112 0 6 6 0 01-12 0z"
      ></Path>
    </Svg>
  );
}

export default Icon;
