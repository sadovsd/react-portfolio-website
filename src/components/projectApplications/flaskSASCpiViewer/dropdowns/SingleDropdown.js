import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from '../../../../icons';


function SingleDropdown({ options, onSelect, placeholder, label, className, value }) {
  const node = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);


  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
    setIsFocused(false);
  };

  // Update selectedOption state when the value prop changes
  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleOptionClicked = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setIsFocused(false);
    onSelect(option);
  }

  return (
    <div className={`input-group ${className}`}>
      <div className="dropdown" ref={node}>
        <div className={`dropdown__input ${isFocused ? 'dropdown__input--focused' : ''}`} onClick={e => {setIsOpen(!isOpen); setIsFocused(true)}}>
          <div className={`dropdown__placeholder ${selectedOption ? 'dropdown__option--selected' : ''}`}>{selectedOption ? selectedOption.name : placeholder}</div>
          <ChevronDown className="dropdown__arrow" />

        </div>
        {isOpen && (
          <div className="dropdown__container">
            {options.map(option => (
              <div className="dropdown__option" onClick={() => handleOptionClicked(option)} key={option.name}>
                <span className="dropdown__option-name">{option.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <label htmlFor="inputField" className={`label ${selectedOption ? 'label--float' : ''}`}>{label}</label>
    </div>
  );
}

export default SingleDropdown;
