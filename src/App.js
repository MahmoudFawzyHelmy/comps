import { useState } from "react";
import DropDown from "./components/DropDown";

export default function App() {
  const [selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    setSelection(option);
  };
  const options = [
    { label: "Red", value: "red" },
    { label: "Yelloy", value: "yellow" },
    { label: "Green", value: "Green" },
    { label: "Blue", value: "Green" },
  ];
  return (
    <div className="flex items-center ">
      <DropDown options={options} value={selection} onChange={handleSelect} />
      <DropDown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}
