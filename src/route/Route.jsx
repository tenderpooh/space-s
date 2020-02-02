import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import {
  Build,
  MonetizationOn,
  Explore,
  MeetingRoom
} from "@material-ui/icons";

import SidebarIcons from "./SidebarIcons";

import Map from "../components/Contents/Map";
import Dashboard from "../components/Contents/Dashboard";
import Assembly from "../components/Contents/Assembly";
import Operation from "../components/Contents/Operation";
import Navigation from "../components/Contents/Navigation";
import Asset from "../components/Contents/Asset";
import Customer from "../components/Contents/Customer";
import Chatting from "../components/Contents/Chatting";

const route = [
  {
    text: "지도",
    icon: <SidebarIcons name="map" size="24" color="white" />,
    component: <Map />
  },
  {
    text: "사업 현황",
    icon: <DashboardIcon />,
    component: <Dashboard />
  },
  {
    text: "우주선 조립/분해",
    icon: <Build />,
    component: <Assembly />
  },
  {
    text: "우주선 운행",
    icon: <SidebarIcons name="operation" size="24" color="white" />,
    component: <Operation />
  },
  {
    text: "항로 시뮬레이션",
    icon: <Explore />,
    component: <Navigation />
  },
  {
    text: "자산 관리",
    icon: <MonetizationOn />,
    component: <Asset />
  },
  {
    text: "고객 서비스",
    icon: <SidebarIcons name="customer" size="24" color="white" />,
    component: <Customer />
  },
  {
    text: "회의실",
    icon: <MeetingRoom />,
    component: <Chatting />
  }
];

export default route;
