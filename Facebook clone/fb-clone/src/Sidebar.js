import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import PeopleIcon from '@mui/icons-material/People';
import HistoryIcon from '@mui/icons-material/History';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PaymentIcon from '@mui/icons-material/Payment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FlagIcon from '@mui/icons-material/Flag';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from "./StateProvider"

function Sidebar() {

  const [{ user, dispatch }] = useStateValue();



  return <div className="sidebar">

    <SidebarRow src={user.photoURL} title={user.displayName} />
    <SidebarRow Icon={PeopleIcon} title="Friends" />
    <SidebarRow Icon={PaymentIcon} title="Order and Payments" />
    <SidebarRow Icon={GroupsIcon} title="Groups" />
    <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
    <SidebarRow Icon={OndemandVideoIcon} title="Watch" />
    <SidebarRow Icon={HistoryIcon} title="Memories" />
    <SidebarRow Icon={BookmarkIcon} title="Saved" />
    <SidebarRow Icon={FlagIcon} title="Pages" />
    <SidebarRow Icon={EventNoteIcon} title="Events" />
    <SidebarRow Icon={ExpandMoreIcon} title="See more" />


  </div>;

}

export default Sidebar;