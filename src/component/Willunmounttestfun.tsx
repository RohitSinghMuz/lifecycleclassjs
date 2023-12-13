import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Willunmounttestfun = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setisRunning] = useState(false);

  const handleStart = () => {
    setisRunning(true);
  };

  const handleStop = () => {
    setisRunning(false);
  };

  const handleReset = () => {
    setisRunning(true);
    setCount(0);
  };

  useEffect(() => {
    let interval: any;
    if (isRunning) {
      interval = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, count]);
  return (
    <Box>
      <Typography>Unmount fun {count}</Typography>

      <Button onClick={handleStart}>Start</Button>
      <Button onClick={handleStop}>Stop</Button>
      <Button onClick={handleReset}>Reset</Button>
    </Box>
  );
};

export default Willunmounttestfun;
