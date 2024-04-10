import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon  from '@mui/icons-material/Settings';
import PersonIcon  from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ArticleIcon from '@mui/icons-material/Article';
import Groups2Icon from '@mui/icons-material/Groups2';
import DarkModeIcon from '@mui/icons-material/DarkMode';


const Sidebar = () => {
  return (
<Box   flex={1} p={2} sx={{ display:{xs:"none", sm:"block"}}}
    >   
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#page">
              <ListItemIcon >
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          </List>
          <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#page">
              <ListItemIcon >
                <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          </List>
          <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#page">
              <ListItemIcon >
                <Groups2Icon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          </List>
          <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#page">
              <ListItemIcon >
                <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          </List>
          <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#page">
              <ListItemIcon >
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          </List>
          <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#page">
              <ListItemIcon >
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="settings" />
            </ListItemButton>
          </ListItem>
          </List>
          <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-test">
              <ListItemIcon >
                <AccountBoxIcon/>
              </ListItemIcon>
              <ListItemText primary="profile" />
            </ListItemButton>
          </ListItem>
          </List>
          <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-test">
              <ListItemIcon >
              <DarkModeIcon/>
              </ListItemIcon>
              <Switch/>
            </ListItemButton>
          </ListItem>
          </List>
        </Box>
  )
}

export default Sidebar