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
      <Path fill={fill} d="M19 18H5a1 1 0 100 2h14a1 1 0 100-2z"></Path>
      <Path
        fill={fill}
        d="M4 17v2a1 1 0 102 0v-2a1 1 0 10-2 0zM18 17v2a1 1 0 102 0v-2a1 1 0 10-2 0zM12 15a1 1 0 01-.58-.18l-4-2.82a1 1 0 111.16-1.63L12 12.76l3.4-2.56a1 1 0 111.2 1.6l-4 3a1 1 0 01-.6.2z"
      ></Path>
      <Path
        fill={fill}
        d="M12 13a1 1 0 01-1-1V4a1 1 0 012 0v8a1 1 0 01-1 1z"
      ></Path>
    </Svg>
  );
}

export default Icon;
