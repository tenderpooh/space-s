import React from "react";
import MapIcon from "@material-ui/icons/Map";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BuildIcon from "@material-ui/icons/Build";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

import Map from "../components/Contents/Map";
import Dashboard from "../components/Contents/Dashboard";
import Assembly from "../components/Contents/Assembly";

const route = [
  {
    text: "지도",
    icon: <MapIcon />,
    component: <Map />
  },
  {
    text: "사업 현황",
    icon: <DashboardIcon />,
    component: <Dashboard />
  },
  {
    text: "우주선 조립/분해",
    icon: <BuildIcon />,
    component: <Assembly />
  },
  {
    text: "우주선 운전",
    icon: <FlightTakeoffIcon />,
    component: <Map />
  },
  {
    text: "자산 관리",
    icon: <MonetizationOnIcon />,
    component: <Map />
  }
];

export default route;
