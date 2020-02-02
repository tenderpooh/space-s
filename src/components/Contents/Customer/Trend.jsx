import React from "react";
import { DataContext } from "../../../backend/DataProvider";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

import trend1 from "./TrendImages/trend-1.jpg";
import trend2 from "./TrendImages/trend-2.jpg";
import trend3 from "./TrendImages/trend-3.jpg";
import trend4 from "./TrendImages/trend-4.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    height: "320px"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

const tileData = [
  {
    img: trend1,
    title: "누구나 우주를 갈 수 있다? 우주 관광 시대 도래!"
  },
  {
    img: trend2,
    title: "우주쓰레기로 인한 정부 규제, 우주 관광 적신호?"
  },
  {
    img: trend3,
    title: "영화 ‘주피터’흥행에 따른 목성 관광 여행 인기 급등"
  },
  {
    img: trend4,
    title: "너도나도 우주관광, 우주 여행 상품 저가 경쟁 심화"
  },
  {
    img: trend1,
    title: "누구나 우주를 갈 수 있다? 우주 관광 시대 도래!"
  },
  {
    img: trend2,
    title: "우주쓰레기로 인한 정부 규제, 우주 관광 적신호?"
  },
  {
    img: trend3,
    title: "영화 ‘주피터’흥행에 따른 목성 관광 여행 인기 급등"
  },
  {
    img: trend4,
    title: "너도나도 우주관광, 우주 여행 상품 저가 경쟁 심화"
  },
  {
    img: trend1,
    title: "누구나 우주를 갈 수 있다? 우주 관광 시대 도래!"
  },
  {
    img: trend2,
    title: "우주쓰레기로 인한 정부 규제, 우주 관광 적신호?"
  },
  {
    img: trend3,
    title: "영화 ‘주피터’흥행에 따른 목성 관광 여행 인기 급등"
  },
  {
    img: trend4,
    title: "너도나도 우주관광, 우주 여행 상품 저가 경쟁 심화"
  },
  {
    img: trend1,
    title: "누구나 우주를 갈 수 있다? 우주 관광 시대 도래!"
  },
  {
    img: trend2,
    title: "우주쓰레기로 인한 정부 규제, 우주 관광 적신호?"
  },
  {
    img: trend3,
    title: "영화 ‘주피터’흥행에 따른 목성 관광 여행 인기 급등"
  },
  {
    img: trend4,
    title: "너도나도 우주관광, 우주 여행 상품 저가 경쟁 심화"
  }
];

export default function Trend() {
  const classes = useStyles();
  const { game } = React.useContext(DataContext);

  return (
    <GridList cellHeight={300} className={classes.gridList}>
      <GridListTile cols={2}>
        <img src={tileData[game.round].img} alt={tileData[game.round].title} />
        <GridListTileBar
          title={tileData[game.round].title}
          actionIcon={
            <IconButton
              aria-label={`info about ${tileData[game.round].title}`}
              className={classes.icon}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </GridListTile>
    </GridList>
  );
}
