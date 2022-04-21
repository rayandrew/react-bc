import React from "react";

function CounterPage() {
  const [count, setCount] = React.useState(0);
  const [date, setDate] = React.useState<Date>(new Date());

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [setDate]);

  React.useEffect(() => {
    increment();
  }, [date]);

  return (
    <>
      <div className="counter">{count}</div>
      <div>
        <button className="btn-counter" onClick={increment}>
          +
        </button>
        <button className="btn-counter" onClick={decrement}>
          -
        </button>
      </div>
      <div>{date.toLocaleString()}</div>
    </>
  );
}

export { CounterPage };
