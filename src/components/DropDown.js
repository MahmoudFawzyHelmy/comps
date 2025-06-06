import { useState, useRef, useEffect } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

export default function DropDown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef();
  useEffect(() => {
    const handler = (event) => {
  if(divRef.current && 
     !divRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler), true;
    return () => {
      document.removeEventListener("click", handler, true);
    };
  });
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOprtions = options.map((option, index) => {
    return (
      <div
        className="hover:bg-sky-100 rounded curosor-pointer p-1"
        key={index}
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="w-48 relative" ref={divRef}>
      <Panel
        className="flex justify-between items-center curosor-pointer "
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full ">{renderedOprtions}</Panel>
      )}
    </div>
  );
}
