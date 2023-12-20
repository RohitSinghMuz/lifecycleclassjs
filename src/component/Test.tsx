import { Box, Button, Typography } from "@mui/material";
import React, { Component } from "react";

class Test extends Component {
  state = {
    name: "Singh",
  };

  handleUpdateName = () => {
    this.setState({ name: "Rohit" });
  };

  componentDidUpdate(preprops: any, prevState: any, _snapShot: any) {
    if (prevState.name !== this.state.name) {
      console.log("Update name");
      // alert("Update name");
    }
  }
  render() {
    return (
      <Box>
        <Typography>Initial Name:{this.state.name}</Typography>
        <Button onClick={this.handleUpdateName}>Update Name</Button>
      </Box>
    );
  }
}

export default Test;
