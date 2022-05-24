import React from "react";
import {Svg,Path, NumberProp} from "react-native-svg";

interface IconProps {
    fill:String,
    width:NumberProp,
    height:NumberProp
}

function Icon({fill,width,height}:IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
    >
      <Path
        fill={`${fill}`}
        fillRule="evenodd"
        d="M9.167 1.667H5A3.333 3.333 0 001.667 5v10A3.333 3.333 0 005 18.333h10A3.333 3.333 0 0018.333 15v-4.167a.834.834 0 00-1.666 0V15c0 .92-.747 1.667-1.667 1.667H5c-.92 0-1.667-.747-1.667-1.667V5c0-.92.746-1.667 1.667-1.667h4.167a.834.834 0 000-1.666zm6.321 1.666H12.5a.834.834 0 010-1.666h5c.46 0 .833.373.833.833v5a.834.834 0 01-1.666 0V4.512l-6.078 6.077a.834.834 0 01-1.178-1.178l6.077-6.078z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
}

export default Icon;
