import React from 'react'
import Box from '@mui/material/Box';
import Navbar from "./Components/Navbar"
import RightBar from "./Components/RightBar"
import Feed from "./Components/Feed"
import SideBar from "./Components/SideBar"
import { Stack } from '@mui/material';

const App = () => {
  return (
    <Box>
      <Navbar/>
      <Stack justifyContent="space-evenly" direction="row" spacing={2} >
        <SideBar/>
        <Feed/>
        <RightBar/>
      </Stack>
    </Box>
  )
}

export default App