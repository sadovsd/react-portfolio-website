import React, { useState } from 'react';
import Dropdown from './Dropdown';

function DropdownOption({ option, onOptionClick }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleMouseEnter = () => {
    if (option.subOptions) {
      setIsSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setIsSubmenuOpen(false);
  };

  const handleClick = () => {
    if (!option.subOptions) {
      onOptionClick(option);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="dropdown__option"
    >
      {option.name}
      {/* Add right arrow for options with sub-options */}
      {option.subOptions && <i className="dropdown__option-arrow" />} 

      {isSubmenuOpen && (
        <div className="dropdown__submenu">
          <Dropdown options={option.subOptions} onOptionClick={onOptionClick} />
        </div>
      )}
    </div>
  );
}

export default DropdownOption;
