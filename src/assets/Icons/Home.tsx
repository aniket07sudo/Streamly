import React from "react";
import {Svg,Path} from "react-native-svg";

function Icon({fill}:any) {
  return (
    <Svg
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 17"
    >
      <Path
        fill={fill}
        d="M8 16v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9h1.7c.46 0 .68-.57.33-.87L10.67.6c-.38-.34-.96-.34-1.34 0L.97 8.13c-.34.3-.13.87.33.87H3v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
      ></Path>
    </Svg>
  );
}

export default Icon;
