import { useState } from 'react';

function Counter(props) {
  // sukurti state counterValue

  const [counter, setCounter] = useState(0);

  // sukurti fn handleUp, handleDown, handleUpBy, handleReset

  function handleUp() {
    setCounter((prev) => {
      return prev + 1;
    });
  }

  function handleDown() {
    setCounter((prev) => {
      return prev - 1;
    });
  }

  function handleUpBy() {
    setCounter((prev) => {
      return prev + 10;
    });
  }
  function handleReset() {
    setCounter(0);
  }

  // sudeti fn ant mygtuku kad veiktu aplikaicija

  return (
    <div className="card counter">
      <p>Counter</p>
      <h2>{counter}</h2>
      <div className="ctrl">
        <button onClick={handleUp}>up</button>
        <button onClick={handleDown}>down</button>
        <button onClick={handleUpBy}>up by 10</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
}
export default Counter;
