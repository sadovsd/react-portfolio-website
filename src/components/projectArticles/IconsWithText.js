import React from "react";

const IconsWithText = ({ leftIcon, leftText, rightIcon, rightText, className }) => {
  return (
    <div className={"flex items-center " + className}>
      <div className="flex items-center mr-4">
        {leftIcon}
        <span className="ml-1 leading-none whitespace-nowrap">{leftText}</span>
      </div>
      <div className="flex items-center">
        {rightIcon}
        <span className="ml-1 leading-none whitespace-nowrap">{rightText}</span>
      </div>
    </div>
  );
};

export default IconsWithText;
