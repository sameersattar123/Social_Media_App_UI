import React from "react";
import Button from '@mui/material/Button';
import { Typography, styled } from "@mui/material";

const App = () => {
  const BlueButton = styled(Button)({
    backgroundColor : "blue",
    color: "#fff",
    "&:hover":{
      backgroundColor : "gray",
      color : "white"
    }
  })
  return (
    <div>
      <Button variant="contained" color="success"  size="small">Text</Button>
      <Button variant="contained" color="secondary" size="median">Contained</Button>
      <Button variant="outlined" size="large">Outlined</Button>
      <Typography variant="h1"  component="h1">Sameer Sattar wdwdwdw</Typography>
      <BlueButton>Sameeer Sattar</BlueButton>
    </div>
  );
};

export default App;
