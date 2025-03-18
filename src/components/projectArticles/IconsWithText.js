import React from "react";

const IconsWithText = ({ leftIcon, leftText, rightIcon, rightText, className }) => {
  return (
    <div className={"flex " + className}>
      <div className="flex mr-4">
        {leftIcon}
        <p className="ml-1 leading-none whitespace-nowrap">{leftText}</p>
      </div>
      <div className="flex items-start">
        {rightIcon}
        <p className="ml-1 leading-none">{rightText}</p>
      </div>
    </div>
  );
};

export default IconsWithText;
