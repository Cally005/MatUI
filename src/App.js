import React from 'react';
import Button from '@mui/material/Button';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { styled, Typography } from '@mui/material';
import {theme}  from './theme';
function App() {

  const MyButton = styled(Button)(({theme})=>({
    backgroundColor:theme.palette.primary,
    margin:10,
    "&:hover":{
      backgroundColor:"red"
    },


  }));



  return (
    <div>
   <Button color='primary' variant="text">Text</Button>
   <Button color="otherColor"  startIcon={< SettingsApplicationsIcon/>} variant="contained">Contained</Button>
  <Button variant="outlined"  disabled >Outlined</Button>
  <Typography variant="h1" component="p">
    it uses h1 style but it is a p tag
</Typography>

<MyButton>my button</MyButton>
    </div>
  );
}

export default App;
