import { Box, Button, Typography } from "@mui/material";
import React from "react";

class Updatestate extends React.Component {
  state = {
    name: "Singh",
  };

  componentDidUpdate(prevProps: any, prevState: any, snapshot?: any): void {
    if (prevState.name !== this.state.name) {
      console.log("Updating state");
    }
  }

  handleUpdateName = () => {
    this.setState({ name: "Rohit" });
  };

  render(): React.ReactNode {
    return (
      <Box>
        <Typography>{this.state.name}</Typography>
        <Button onClick={this.handleUpdateName}>Update Name</Button>
      </Box>
    );
  }
}
export default Updatestate;
