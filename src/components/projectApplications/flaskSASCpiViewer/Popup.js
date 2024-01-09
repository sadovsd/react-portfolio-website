import { useState } from "react";

const Popup = ({ text, children, overrideIsVisible }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  return (
    <div className="relative">
      <div
        className="w-full"
        onMouseEnter={() => {
          if (!overrideIsVisible) {
            setPopupVisible(true);
          } else {
            setPopupVisible(false);
          }
        }}
        onMouseLeave={() => setPopupVisible(false)}
      >
        {children}
      </div>
      <div className="flex absolute">
        {isPopupVisible && (
          <div className="bg-gray-800 text-white p-4 rounded-md shadow-md z-50">
            {text}
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
