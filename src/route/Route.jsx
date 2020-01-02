import React from "react";
import MapIcon from "@material-ui/icons/Map";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BuildIcon from "@material-ui/icons/Build";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const route = [
  {
    text: "지도",
    icon: <MapIcon />
  },
  {
    text: "사업 현황",
    icon: <DashboardIcon />
  },
  {
    text: "우주선 조립/분해",
    icon: <BuildIcon />
  },
  {
    text: "우주선 운전",
    icon: <FlightTakeoffIcon />
  },
  {
    text: "자산 관리",
    icon: <MonetizationOnIcon />
  }
];

export default route;
