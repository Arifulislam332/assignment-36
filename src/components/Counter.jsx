import { useReducer } from "react";

const initialState = {
  count: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleDec = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleInc = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <div className="p-20">
      <p className="text-2xl font-medium">Count: {state.count}</p>
      <div className="flex gap-5 mt-5">
        <button
          onClick={handleDec}
          className="text-xl font-medium bg-red-500 p-3 rounded-lg text-white active:bg-black"
        >
          Decrease
        </button>
        <button
          onClick={handleInc}
          className="text-xl font-medium bg-red-500 p-3 rounded-lg text-white active:bg-black"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
