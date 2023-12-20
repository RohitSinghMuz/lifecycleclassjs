import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const App = () => {
  let images = [
    "https://t3.ftcdn.net/jpg/05/07/89/10/360_F_507891011_28LZZyUUOsCtpYLqpLR9g98YSCrEIPwo.jpg",
    "https://thumbs.dreamstime.com/b/frame-white-flowers-png-apple-trees-transparent-background-additional-file-127791844.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjz6L_tb_nAyHaSeJx0Nfe52Klh96GtMm9Ht_WQymONJ8GAWBWbhlC59iQ7NkipvV-brM&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSHaG8oh_dOQapGcEIqJcgduOm0cHf442da5s03gvd_JqMhC7ic7NOIOAl1X2kyt9yqtU&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRjpieQ-altYe9Ht4GIzBVw5hdZIUKsY8N7Q&usqp=CAU",
  ];

  let imgLength = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    let cuIndex = (currentIndex - 1 + imgLength) % imgLength;
    setCurrentIndex(cuIndex);
  };
  const handleRight = () => {
    let cuIndex = (currentIndex + 1) % imgLength;
    setCurrentIndex(cuIndex);
  };
  const handleItemMap = (item: any, index: any) => {
    return (
      <Button
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: currentIndex === index ? "red" : "grey",
          margin: "10px",
          border: "1px solid grey",
          borderRadius: "50%",
        }}
        onClick={() => setCurrentIndex(index)}
      />
    );
  };

  useEffect(() => {
    let interval = setInterval(() => {
      let currentIndx = (currentIndex + 1) % imgLength;
      setCurrentIndex(currentIndx);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, imgLength]);
  return (
    <Box sx={{ marigin: "20px auto" }}>
      <Typography>Carousel</Typography>
      <Button onClick={handleLeft}>Left</Button>
      <img
        src={images[currentIndex]}
        style={{
          width: "80%",
          height: "500px",
          margin: "30px",
        }}
      />

      <Button onClick={handleRight}>Right</Button>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {images.map((item, index) => handleItemMap(item, index))}
      </Box>
    </Box>
  );
};

export default App;
