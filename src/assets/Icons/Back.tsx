import React from "react";
import {Svg,Path} from "react-native-svg";

function Icon({fill}:any) {
  return (
    <Svg
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M13.83 19a1 1 0 01-.78-.37l-4.83-6a1 1 0 010-1.27l5-6a1.001 1.001 0 011.54 1.28L10.29 12l4.32 5.36a1 1 0 01-.78 1.64z"
      ></Path>
    </Svg>
  );
}

export default Icon;
