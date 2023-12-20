import { Box, Button, Select, Typography } from "@mui/material";
import React, { useState } from "react";

const Selectele = () => {
  const [select, setSelect] = useState<any[]>([]);

  let data = [
    { id: 1, name: "Delhi" },
    { id: 2, name: "Kolkata" },
    { id: 3, name: "Mohali" },
    { id: 4, name: "Hyderabad" },
    { id: 5, name: "Pune" },
    { id: 6, name: "Chennai" },
    { id: 7, name: "Banglore" },
    { id: 8, name: "Patna" },
  ];
  const handleManullySelect = (idx: any) => {
    const selectValue = data.filter((item, id) => item.id === idx)[0];

    const isSelected = select.some((item, index) => item.id === selectValue.id);
    if (isSelected) {
      let unSelectValue = select.filter(
        (item, index) => item.id !== selectValue.id
      );
      setSelect(unSelectValue);
    } else setSelect([...select, selectValue]);
    console.log("select---", select);
  };

  const handleMapData = (item: any) => {
    return (
      <Box style={{ width: "80%", margin: "30px auto" }}>
        <Button
          onClick={() => handleManullySelect(item.id)}
          style={{
            backgroundColor: select.some((ele, id) => ele.id === item.id)
              ? "red"
              : "white",
          }}
        >
          {item.name}
        </Button>
      </Box>
    );
  };

  const handleAllSelect = () => {
    setSelect([...data]);
    console.log("select---", select);
  };

  const handleAllUnSelect = () => {
    setSelect([]);
    console.log("select---", select);
  };
  return (
    <Box style={{ width: "80%", margin: "30px auto" }}>
      <Typography>Select</Typography>
      {data.map((item) => handleMapData(item))}

      <Button onClick={handleAllSelect}>All Select</Button>
      <Button onClick={handleAllUnSelect}>All UnSelect</Button>
    </Box>
  );
};
export default Selectele;
