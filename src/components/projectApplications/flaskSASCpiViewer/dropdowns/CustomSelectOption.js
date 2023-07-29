import React, { useState, useCallback, useEffect, useRef } from 'react';
import { FixedSizeList as List } from 'react-window';

const CustomSelectOption = ({ data, handleSubOption, selectProps, isSelected, innerProps }) => {
  const [showSubOptions, setShowSubOptions] = useState(false);
  const subOptionsRef = useRef();

  const handleMouseEnter = () => {
    setShowSubOptions(true);
  };

  const handleMouseLeave = () => {
    setShowSubOptions(false);
  };

  const handleSubOptionClick = (item) => {
    handleSubOption(item);
    setShowSubOptions(false);
  };

  const Row = useCallback(({ index, style }) => {
    const item = data.itemNames[index];
    return (
      <div
        key={item.item_code}
        style={style}
        onClick={() => handleSubOptionClick(item)}
        className="submenu-item"
      >
        {item.item_name}
      </div>
    );
  }, []);

  // Close submenu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (subOptionsRef.current && !subOptionsRef.current.contains(event.target)) {
        setShowSubOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return data.custom ? (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="customs"
      >
        {data.label} <span className="caret" />
        {showSubOptions && (
          <div ref={subOptionsRef} className="dropdown-submenu">
            <List
              height={150}
              itemCount={data.itemNames.length}
              itemSize={35}
              width={200}
            >
              {Row}
            </List>
          </div>
        )}
      </div>
      <style jsx>{`
        .dropdown-submenu {
          position: absolute;
          left: 100%;
          top: 0;
          background-color: #fff;
          border: 1px solid #aaa;
          border-radius: 4px;
          padding: 8px;
          min-width: 200px;
          z-index: 2;
        }

        .submenu-item {
          padding: 8px 12px;
          cursor: pointer;
        }

        .submenu-item:hover {
          background-color: #B3D4FC;
          color: #fff;
        }

        .customs {
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #fff;
          padding: 8px;
          border: 1px solid #aaa;
          border-radius: 4px;
        }

        .customs:hover {
          background-color: #B3D4FC;
        }

        .caret::after {
          content: ">";
          margin-left: 8px;
          color: #888;
        }
      `}</style>
    </>
  ) : (
    <div {...innerProps}>
      {data.label}
    </div>
  );
};

export default CustomSelectOption;
