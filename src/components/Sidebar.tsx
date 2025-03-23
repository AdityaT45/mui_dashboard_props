import { Box } from '@mui/material'

import {  Grid,  Toolbar, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import ExtensionIcon from '@mui/icons-material/Extension';
import MessageIcon from '@mui/icons-material/Message';
import PieChartIcon from '@mui/icons-material/PieChart';
import NewspaperIcon from '@mui/icons-material/Newspaper';

import SidebarList from "./SidebarList";

const Sidebar = () => {


  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Search Job", icon: <SearchIcon /> },
    { text: "Applications", icon: <ExtensionIcon /> },
    { text: "Messages", icon: <MessageIcon /> },
    { text: "Statistics", icon: <PieChartIcon /> },
    { text: "News", icon: <NewspaperIcon /> },
  ];
  return (
    <>
    <Box
        sx={{
          width: { xs: "60px", md: "240px" },
          bgcolor: "#40189d",
          color: "white",
          p: 2,
          display: {xs:"none",sm:"flex"},
          flexDirection: "column",
        }}
      >
        <Toolbar>
        <Typography variant="h3" sx={{ flexGrow: 1,display: {sm:"none",md:"flex"}, }}>
          Jobie
        </Typography>
       
      </Toolbar>

      {menuItems.map((item, index) => (
          <SidebarList sx={{mt:3}} key={index} text={item.text} icon={item.icon} />
        ))}
      </Box>
    </>
  )
}

export default Sidebar












