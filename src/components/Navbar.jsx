import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications'
import React, { useState } from 'react'
// import {theme}  from './theme';




const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Search = styled("div")(({theme}) => ({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width:"40%"
}));
const Icons = styled(Box)(({theme}) => ({
display:"none",
alignItems:"center",
gap:"20px",
[theme.breakpoints.up("sm")]:{
  display:"flex"
}
}));

const UserBox = styled(Box)(({theme}) => ({
  display:"flex",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  } 
 
  }));

const Navbar = () => {
const [open, setOpen] = useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolbar>
       <Typography varient="h6" sx={{ display:{xs:"none",sm: "block" }}}>Navbar</Typography> 
       < MenuIcon    sx={{ display:{xs:"block",sm: "none" }}}/>
       <Search><InputBase placeholder='search'/></Search>
       <Icons>
        <Badge badgeContent={2} color="error"
       >
         <MailIcon/>
      </Badge>
         <Badge badgeContent={2} color="error"
       >
         <NotificationsIcon/>
        </Badge>
        <Avatar sx={{width:30, height:30}}
        onClick={(e)=>setOpen(true)}
        src="https://i.pinimg.com/236x/97/f7/b4/97f7b4f2aaa9d473cb81f30521567ad1.jpg"/>
        </Icons>

        <UserBox onClick={(e)=>setOpen(true)}>
        <Avatar sx={{width:30, height:30}} src="https://i.pinimg.com/236x/97/f7/b4/97f7b4f2aaa9d473cb81f30521567ad1.jpg"/>
        <Typography varient="span"> Lordson</Typography>
        </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose = {(e) => setOpen(false)}
        anchorOrigin={{ 
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

    </AppBar>
  )
}

export default Navbar