import Link from "./Link";

export default function Sidbar() {
  const links = [
    { label: "Dropdown", path: "/dropdown" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Counter", path: "/counter" },
    {label :"count" , path:"/count"}
  ];
  const renderLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-3"
        activeCLassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderLinks}
    </div>
  );
}
