import React, { useState } from "react";

const App = () => {
  const [timer, setTimer] = useState("");
  const [show, setShow] = useState(true);
  const [secs, setSecs] = useState(0);
  const format = (sec) => {
    const min = Math.floor(sec / 60);
    const s = sec % 60;
    const secS = s < 10 ? `0${s}` : s;

    return `${min}:${secS}`;
  };
  const start = () => {
    setShow(false);
    const t = setInterval(() => {
      setSecs((prev) => prev + 1);
    }, 1000);
    setTimer(t);
  };
  const stop = () => {
    clearInterval(timer);
    setShow(true);
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {format(secs)}</p>
      {show ? (
        <button onClick={start}>Start</button>
      ) : (
        <button onClick={stop}>Stop</button>
      )}
      <button
        onClick={() => {
          stop();
          setSecs(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
