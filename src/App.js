import DropDown from "./components/DropDown";

export default function App() {
  const options = [
    { label: "Red", value: "red" },
    { label: "Yelloy", value: "yellow" },
    { label: "Green", value: "Green" },
    { label: "Blue", value: "Green" },
  ];
  return (
    <div>
      <DropDown options={options} />
    </div>
  );
}
