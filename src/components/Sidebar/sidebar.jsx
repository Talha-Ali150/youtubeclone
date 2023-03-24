import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreIcon from '@mui/icons-material/Explore';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import HistoryIcon from '@mui/icons-material/History';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';

const App = () => {
    const { collapseSidebar } = useProSidebar();
    return (
      <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
        <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          > 
            {" "}
            <h2>YouTube</h2>
          </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<ExploreOutlinedIcon />}>Explore</MenuItem>
          <MenuItem icon={<SubscriptionsOutlinedIcon />}>Subscriptions</MenuItem>
          <MenuItem icon={<VideoCameraFrontOutlinedIcon />}>Shorts</MenuItem>
          <MenuItem icon={<LibraryAddCheckOutlinedIcon />}>Library</MenuItem>
          <MenuItem icon={<HistoryIcon />}>History</MenuItem>
        </Menu>
      </Sidebar>
      </div>
    );
        }

export default App