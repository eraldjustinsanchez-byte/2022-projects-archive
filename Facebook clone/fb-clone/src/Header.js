import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import {Avatar, IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { useStateValue } from "./StateProvider"

function Header() {

  const [{user, dispatch}] = useStateValue();




  return (
    <div className="header">
        <div className="header__left">

            <img 
                src="https://www.facebook.com/images/fb_icon_325x325.png" 
                alt="fb icon"/>
          <div className="header__input">
            <SearchIcon />
            <input placeholder="Search Facebook" type="text" />
          </div>

        </div>
        <div className="header__center">
          <div className="header__option header__option--active">
            <HomeIcon fontSize="large"/>
          </div>
          <div className="header__option">
            <OndemandVideoIcon fontSize="large"/>
          </div>
          <div className="header__option">
            <StorefrontIcon fontSize="large"/>
          </div>
          <div className="header__option">
            <GroupsIcon fontSize="large"/>
          </div>
          <div className="header__option">
            <SportsEsportsIcon fontSize="large"/>
          </div>
        </div>  

        <div className="header__right">
          
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          
        </div>

        <div className="header__info">  
          <Avatar src={user.photoURL}/> 
        </div>
    </div>
  )
}

export default Header; 