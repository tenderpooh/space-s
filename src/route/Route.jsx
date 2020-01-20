import React from "react";
import MapIcon from "@material-ui/icons/Map";
import DashboardIcon from "@material-ui/icons/Dashboard";
import {
  Build,
  FlightTakeoff,
  MonetizationOn,
  Explore,
  Call
} from "@material-ui/icons";

import Map from "../components/Contents/Map";
import Dashboard from "../components/Contents/Dashboard";
import Assembly from "../components/Contents/Assembly";
import Operation from "../components/Contents/Operation";
import Navigation from "../components/Contents/Navigation";
import Asset from "../components/Contents/Asset";
import Customer from "../components/Contents/Customer";

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
    icon: <Build />,
    component: <Assembly />
  },
  {
    text: "우주선 운행",
    icon: <FlightTakeoff />,
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
    icon: <Call />,
    component: <Customer />
  }
];

export default route;
