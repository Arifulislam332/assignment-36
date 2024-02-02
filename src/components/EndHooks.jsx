import { useCallback, useMemo, useState } from "react";

const EndHooks = () => {
  const [count, setCount] = useState(0);

  const handleInc = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleDec = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <div className="p-20">
      <p className="text-2xl font-medium mb-5">Count: {count}</p>
      <div className="flex items-center gap-5">
        <button
          onClick={handleDec}
          className="bg-red-500 rounded-lg px-4 py-2 hover:bg-red-400 text-white font-medium text-xl"
        >
          Decrease
        </button>
        <button
          onClick={handleInc}
          className="bg-red-500 rounded-lg px-4 py-2 hover:bg-red-400 text-white font-medium text-xl"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default EndHooks;
