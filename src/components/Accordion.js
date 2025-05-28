import { useState } from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
export default function Accordion({ items }) {
  const [expaneded, setExapanded] = useState(0);
  const handleClick = (nextIndex) => {
    setExapanded(nextIndex);
  };
  const rendredItems = items.map((item, index) => {
    const isExpanded = index === expaneded;
    const icon = (
      <span className="text-xl">
        {isExpanded ? <FaAngleDown /> : <FaAngleLeft />}
      </span>
    );
    return (
      <div key={item.id}>
        <div
          className="flex items-center justify-between p-3 bg-gray-50 border-b cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{rendredItems}</div>;
}
