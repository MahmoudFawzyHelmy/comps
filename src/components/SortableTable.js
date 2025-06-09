
import useSort from "../hooks/use-sort";
import Table from "./Table";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export default function SortableTable(props) {
  const { config, data } = props;
  const {sortBy, sortData,sortOrder,handleClick}=useSort(data,config)

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          onClick={() => handleClick(column.label)}
          className="cursor-pointer hover:bg-gray-100"
        >
          <div className="flex items-center mx-3">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });


  return <Table {...props} config={updatedConfig} data={sortData} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  }
  if (sortOrder == null) {
    return (
      <div>
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  } else if (sortOrder == "asc") {
    return <GoChevronUp />;
  } else if (sortOrder == "desc") {
    return <GoChevronDown />;
  }
}
