import React from "react";
import {Svg,Path} from "react-native-svg";

function Icon({fill}) {
  return (
    <Svg
      width="24"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M12 11a4 4 0 100-8 4 4 0 000 8zM18 21a1 1 0 001-1 7 7 0 10-14 0 1 1 0 001 1h12z"
      ></Path>
    </Svg>
  );
}

export default Icon;
