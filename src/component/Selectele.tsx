import { Box, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";

const Selectele = () => {
  let data = [
    { id: 1, name: "Rohit" },
    { id: 2, name: "Amar" },
    { id: 3, name: "Chandan" },
    { id: 4, name: "Hyderabad" },
    { id: 5, name: "Pune" },
    { id: 6, name: "Chennai" },
    { id: 7, name: "Banglore" },
    { id: 8, name: "Patna" },
  ];

  const [selected, setSelected] = useState<any[]>([]);
  const [initialSelect, setInitialSelect] = useState<boolean>(true);

  const handleMannuallySelect = (idx: number) => {
    let selectelement = data.filter((item, index) => item.id === idx)[0];
    const isSelected = selected.some(
      (item, index) => item.id === selectelement.id
    );

    if (isSelected) {
      let unSelectelement = selected.filter(
        (item, index) => item.id !== selectelement.id
      );
      setSelected(unSelectelement);
    } else {
      setInitialSelect(false);
      setSelected([...selected, selectelement]);
      console.log("selected---manually", [...selected, selectelement]);
    }
  };

  const handleMapElement = (item: any) => {
    return (
      <Box key={item.id} sx={styles.maplist}>
        <Button
          onClick={() => handleMannuallySelect(item.id)}
          sx={{
            backgroundColor: selected.some((elem) => elem.id === item.id)
              ? "red"
              : "white",
            "&:hover": {
              backgroundColor: "inherit",
            },
          }}
        >
          {item.name}
        </Button>
      </Box>
    );
  };

  const handleSelect = () => {
    setSelected(data);
    setInitialSelect(false);
  };

  const handleUnSelect = () => {
    setSelected([]);
  };

  useEffect(() => {
    if (!initialSelect) {
      console.log("selected---All", selected);
    }
  }, [selected, initialSelect]);

  return (
    <Box>
      <Typography>Carousel</Typography>
      {data.map((item) => handleMapElement(item))}

      <Box>
        <Button onClick={handleSelect}>All Select</Button>

        <Button onClick={handleUnSelect}>All UnSelect</Button>
      </Box>
    </Box>
  );
};

export default Selectele;

const styles = {
  maplist: {
    width: "400px",
    padding: "10px",
    margin: "10px auto",
    color: "grey",
  },
};
