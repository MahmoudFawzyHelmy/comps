import classNames from "classnames";
export default function Panel({ children, className, ...rest }) {
  let fincalClassName = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );
  return (
    <div {...rest} className={fincalClassName}>
      {children}
    </div>
  );
}
