// import { useState } from "react";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
const reducer = (state, action) => {
  // if (action.type === "increment") {
  //   return {
  //     ...state,
  //     count: state.count + 1,
  //   };
  // }
  // if (action.type === "change-value-to-add") {
  //   return {
  //     ...state,
  //     valueToAdd: action.payload,
  //   };
  // }
  // if (action.type === "decrement") {
  //   return {
  //     ...state,
  //     count:state.count-1
  //   }
  // }
  // return state;
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "change-value-to-add":
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case "add-value":
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };

    default:
      return state;
  }
};
export default function CountPage() {
  //   const [count, setCount] = useState(0);
  //   const [valueToAdd, setValueToAdd] = useState(0);
  const [state, despatch] = useReducer(reducer, { count: 0, valueToAdd: 0 });

  const increment = () => {
    //setCount(count+1)
    despatch({
      type: "increment",
    });
  };

  const decrement = () => {
    // setCount(count - 1);
    despatch({
      type: "decrement",
    });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    // setValueToAdd(value);
    despatch({
      type: "change-value-to-add",
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //   setCount(count + valueToAdd)
    //   setValueToAdd(0)
    despatch({
      type: "add-value",
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg"> {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment} primary rounded>
          Increment
        </Button>
        <Button onClick={decrement} danger rounded>
          decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 bordr border-gray-300"
          onChange={handleChange}
          value={state.valueToAdd || ""}
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}
