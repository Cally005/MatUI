import { Avatar, Box, Button, ButtonGroup, Fab, Modal,Stack,styled,TextField,Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import DateRangeIcon from '@mui/icons-material/DateRange';
import ImageIcon from '@mui/icons-material/Image';

const SytledModal = styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})


const UserBox = styled(Box)({
  display:"flex",
  justifyContent:"start",
  gap:"10px",
  marginBottom:"20px"
})


const Add = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
   <Tooltip onClick={(e)=>setOpen(true)}
   title="Add" sx={{ position:"fixed" ,bottom:20, left:{xs:"calc(50%)", md:30 }, }}>
    <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>  
  </Tooltip>
  <SytledModal
  open={open}
  onClose={(e)=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>    
  <Box width={400} height={200} bgcolor={"background.default"} color={"text.primary"} p={3}  borderRadius={5}>
    <Typography varient="h6" color="grey" textAlign="center">
    Create Post
    </Typography>
    <UserBox>
      <Avatar
      src="https://material-ui.com/static/images/avatar/2.jpg" sx={{ width: 30, height: 30}}

      />
      <Typography varient="span" fontWeight={1000} >Lordson</Typography>
        
    
    </UserBox>

    <TextField
    sx={{width:"100%"}}
        id="standard-multiline-static"
        multiline
        placeholder="what is on your mind"
        varient="standard"
      />
      <Stack 
      direction="row" gap={1} mt={2}  mb={1}
      
      >
        <EmojiEmotionsIcon color="primary"/>
        <ImageIcon color="secondary"/>
        <VideoCameraBackIcon color ="success"/>
        <PersonAddIcon color="error"/>

      </Stack>
      <ButtonGroup 
      fullwidth
      variant="contained" aria-label="Basic button group">
        <Button sx={{width:"100px"}}
        >Post</Button>
        <Button><DateRangeIcon/></Button>
      
      </ButtonGroup>
  </Box>
</SytledModal>
</>


  )
};

export default Add