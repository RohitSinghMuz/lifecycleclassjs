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
