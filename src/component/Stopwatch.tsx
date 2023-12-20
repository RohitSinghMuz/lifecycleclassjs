import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const [iseRunning, setIseRunning] = useState(false);

  const handleStart = () => {
    setIseRunning(true);
  };
  const handleStop = () => {
    setIseRunning(false);
  };
  const handleReset = () => {
    setIseRunning(false);
    setCount(0);
  };

  useEffect(() => {
    let interval: any;
    if (iseRunning) {
      interval = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [iseRunning, count]);

  return (
    <Box sx={{ width: "600px", margin: "30px auto" }}>
      <Typography>StopWatch {count}</Typography>

      <Button onClick={handleStart}>Start</Button>
      <Button onClick={handleStop}>Stop</Button>
      <Button onClick={handleReset}>Reset</Button>
    </Box>
  );
};
export default Stopwatch;
