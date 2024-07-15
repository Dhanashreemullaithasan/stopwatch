import { useState,useEffect } from 'react';
import './stopwatch.css';

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  
  useEffect(() => {  
    let intervalId;  
    if (isRunning) {  
      intervalId = setInterval(() => {  
        setTime((prevTime) => prevTime + 10);  
      }, 10);  
    } else {  
      clearInterval(intervalId);  
    }
    return () => clearInterval(intervalId);  
  }, [isRunning]);  

  const handleStart = () => {  
    setIsRunning(true);  
  };  

  const handleStop = () => {  
    setIsRunning(false);  
  };  

  const handleReset = () => {  
    setTime(0);  
    setIsRunning(false);  
  };  


  const formatTime = (time) => {
    
    const seconds = `0${Math.floor((time / 60000))}.slice(-2)`;
    const minutes = `0${Math.floor((time % 60000)  )}.slice(-2)`;
    return `${minutes}:${seconds}`;
  };

  return (
    <>
    <div className="body">
    <h1>STOPWATCH</h1>
     </div>
   
    <div className="stopwatch">
        <h1>Timer</h1>
      <div className="time-display">{formatTime(time)}</div>
      <div className="buttons">
        <button onClick={handleStart} disabled={isRunning}>Start</button>
        <button onClick={handleStop} disabled={!isRunning}>Stop</button>
        <button onClick={handleReset} disabled={isRunning}>Reset</button>
      </div>
    </div>
    </>
  );
};

export default Stopwatch;