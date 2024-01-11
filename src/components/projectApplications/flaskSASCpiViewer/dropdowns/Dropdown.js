import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import './Dropdown.css';
import { ChevronDown, ChevronRight } from '../../../../icons';

function Dropdown({ options, onSelect, label, defaultSelectedOption, className}) {
  const [activeOption, setActiveOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultSelectedOption);
  const [isFocused, setIsFocused] = useState(false);
  // const [isOptionSelected, setIsOptionSelected] = useState(false);

  Dropdown.handleClickOutside = () => {
    setIsOpen(false);
    setIsFocused(false);
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const handleSubOptionClick = (subOption) => {
    onSelect(subOption);
    setSelectedOption(subOption.name);
    setIsOpen(false);
    setIsFocused(false);
    // setIsOptionSelected(true); // Set isOptionSelected to true when an option is selected
  };

  const handleDropDownClick = () => {
    setIsOpen(!isOpen);
    setIsFocused(true);
    // setIsOptionSelected(false); // Reset isOptionSelected to false when dropdown is clicked
  };

  return (
    <div className={className}>
      <div className="input-group w-full">
        <div className="dropdown w-[250px] border-[#add8e6] rounded-md">
          <div
            id='inputField'
            className={`cursor-pointer dropdown__input ${isOpen || isFocused ? 'dropdown__input--focused' : ''}`}
            onClick={handleDropDownClick}
            tabIndex="0"
          >
            {selectedOption ? selectedOption : <span className="dropdown__placeholder">Expense Type</span>}
            <ChevronDown className={`dropdown__arrow`} />
            <label htmlFor="inputField" onClick={handleDropDownClick} className={`cursor-pointer label ${selectedOption ? 'label--float' : ''}`}>{label}</label>
          </div>
          {isOpen && (
            <div className="dropdown__container_nested">
              {options.map((option, index) => (
                <div 
                  key={option.name}
                  onClick={() => handleOptionClick(option)}
                  className={`dropdown__option ${activeOption === option ? 'dropdown__option--active' : ''}`}
                  style={index === 0 ? {marginTop: '0px'} : null}
                >
                  {option.name}
                  <ChevronRight className="dropdown__chevron-right" />
                  {activeOption === option && (
                    <div className="dropdown__sub-options">
                      {option.subOptions.map(subOption => (
                        <div 
                          key={subOption.name} 
                          className={`dropdown__sub-option ${selectedOption === subOption.name ? 'dropdown__sub-option--active' : ''}`}
                          onClick={(e) => {e.stopPropagation(); handleSubOptionClick(subOption);}}
                        >
                          {subOption.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside
};

export default onClickOutside(Dropdown, clickOutsideConfig);
