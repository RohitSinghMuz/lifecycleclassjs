// import React, { Component } from "react";
// import { Box, Button, Typography } from "@mui/material";

// interface State {
//   count: number;
//   isRunning: boolean;
// }

// class Stopwatch extends Component<{}, State> {
//   private interval: NodeJS.Timeout | null = null;

//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       count: 0,
//       isRunning: false,
//     };
//   }

//   componentDidMount(): void {
//     this.startInterval();
//   }

//   componentWillUnmount(): void {
//     this.clearInterval();
//   }

//   handleStart = (): void => {
//     this.setState({ isRunning: true });
//   };

//   handleStop = (): void => {
//     this.setState({ isRunning: false });
//   };

//   handleReset = (): void => {
//     this.setState({ isRunning: false, count: 0 }, () => {
//       this.clearInterval();
//     });
//   };

//   startInterval = (): void => {
//     if (!this.interval) {
//       this.interval = setInterval(() => {
//         if (this.state.isRunning) {
//           this.setState((prevState) => ({
//             count: prevState.count + 1,
//           }));
//         }
//       }, 1000);
//     }
//   };

//   clearInterval = (): void => {
//     if (this.interval) {
//       clearInterval(this.interval);
//       this.interval = null;
//     }
//   };

//   render(): JSX.Element {
//     const { count, isRunning } = this.state;

//     return (
//       <Box>
//         <Typography>Stopwatch: {count} seconds</Typography>

//         <Button onClick={this.handleStart} disabled={isRunning}>
//           Start
//         </Button>

//         <Button onClick={this.handleStop} disabled={!isRunning}>
//           Stop
//         </Button>

//         <Button onClick={this.handleReset} disabled={isRunning}>
//           Reset
//         </Button>
//       </Box>
//     );
//   }
// }

// export default Stopwatch;

import React from "react";

const WillUnmountTestClass = () => {
  return <div></div>;
};

export default WillUnmountTestClass;

// import { Box, Typography, Button } from "@mui/material";
// import React, { useState, useEffect } from "react";

// const Selectele = () => {
//   let data = [
//     { id: 1, name: "Rohit" },
//     { id: 2, name: "Amar" },
//     { id: 3, name: "Chandan" },
//     { id: 4, name: "Hyderabad" },
//     { id: 5, name: "Pune" },
//     { id: 6, name: "Chennai" },
//     { id: 7, name: "Banglore" },
//     { id: 8, name: "Patna" },
//   ];

//   const [selected, setSelected] = useState<any[]>([]);
//   const [initialSelect, setInitialSelect] = useState<boolean>(true);

//   const handleMannuallySelect = (idx: number) => {
//     let selectelement = data.filter((item, index) => item.id === idx)[0];
//     const isSelected = selected.some(
//       (item, index) => item.id === selectelement.id
//     );

//     if (isSelected) {
//       let unSelectelement = selected.filter(
//         (item, index) => item.id !== selectelement.id
//       );
//       setSelected(unSelectelement);
//     } else {
//       setInitialSelect(false);
//       setSelected([...selected, selectelement]);
//       console.log("selected---manually", [...selected, selectelement]);
//     }
//   };

//   const handleMapElement = (item: any) => {
//     return (
//       <Box key={item.id} sx={styles.maplist}>
//         <Button
//           onClick={() => handleMannuallySelect(item.id)}
//           sx={{
//             backgroundColor: selected.some((elem) => elem.id === item.id)
//               ? "red"
//               : "white",
//             "&:hover": {
//               backgroundColor: "inherit",
//             },
//           }}
//         >
//           {item.name}
//         </Button>
//       </Box>
//     );
//   };

//   const handleSelect = () => {
//     setSelected(data);
//     setInitialSelect(false);
//   };

//   const handleUnSelect = () => {
//     setSelected([]);
//   };

//   useEffect(() => {
//     if (!initialSelect) {
//       console.log("selected---All", selected);
//     }
//   }, [selected, initialSelect]);

//   return (
//     <Box sx={{ width: "600px", margin: "30px auto" }}>
//       <Typography>Select</Typography>
//       {data.map((item) => handleMapElement(item))}

//       <Box>
//         <Button
//           sx={{ margin: "10px" }}
//           variant="outlined"
//           onClick={handleSelect}
//         >
//           All Select
//         </Button>

//         <Button
//           sx={{ margin: "10px" }}
//           variant="outlined"
//           onClick={handleUnSelect}
//         >
//           All UnSelect
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default Selectele;

// const styles = {
//   maplist: {
//     width: "400px",
//     padding: "10px",
//     margin: "10px auto",
//     color: "grey",
//   },
// };
