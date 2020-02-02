import React from "react";
import { Grid, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataContext } from "../../backend/DataProvider";

import ShipIcon from "./Map/ShipIcon";

import map from "./Map/map.jpg";

const useStyles = makeStyles(theme => ({
  area: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.text.secondary,
    background: "transparent"
  },
  areaCol: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  },
  container: {
    backgroundImage: `url(${map})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%"
  }
}));

function useWindowSize() {
  const [size, setSize] = React.useState(0);
  React.useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const areas = [
  {
    name: null,
    type: null
  },
  {
    name: "화성",
    type: "land",
    e: 3,
    se: 6
  },
  {
    name: "화성 궤도",
    type: "explore",
    w: 2,
    e: 3,
    se: 6,
    s: 2
  },
  {
    name: "내행성 이동",
    type: "",
    w: 3,
    e: 2,
    sw: 5,
    s: 3,
    se: 6
  },
  {
    name: "목성 궤도",
    type: "explore",
    w: 2,
    sw: 9,
    s: 3,
    e: 2
  },
  {
    name: "목성",
    type: "land",
    w: 2,
    sw: 7
  },
  {
    name: null,
    type: null
  },
  {
    name: null,
    type: null
  },
  {
    name: null,
    type: null
  },
  {
    name: null,
    type: null
  },
  {
    name: "데이모스",
    type: "view",
    nw: 6,
    n: 2,
    ne: 5,
    e: 5,
    sw: 6,
    s: 8,
    se: 8
  },
  {
    name: "우주정거장",
    type: "view",
    nw: 6,
    n: 3,
    ne: 9,
    w: 5,
    e: 6,
    sw: 5,
    s: 4
  },
  {
    name: "목성 접근 미행",
    type: "view",
    nw: 6,
    n: 3,
    ne: 7,
    w: 6,
    sw: 9
  },
  {
    name: null,
    type: null
  },
  {
    name: null,
    type: null
  },
  {
    name: null,
    type: null
  },
  {
    name: null,
    type: null
  },
  {
    name: "포보스",
    type: "view",
    ne: 6,
    e: 5
  },
  {
    name: "지구 궤도",
    type: "explore",
    n: 8,
    ne: 5,
    w: 5,
    e: 2,
    se: 0
  },
  {
    name: "탄도 비행",
    type: "",
    nw: 8,
    n: 4,
    ne: 9,
    w: 2,
    s: 0
  },
  {
    name: null,
    type: null
  },
  {
    name: null,
    type: null
  },
  {
    name: null,
    type: null
  },
  {
    name: null,
    type: null
  },
  {
    name: null,
    type: null
  },
  {
    name: null,
    type: null
  },
  {
    name: null,
    type: null
  },
  {
    name: null,
    type: null
  },
  {
    name: null,
    type: null
  },
  {
    name: null,
    type: null
  },
  {
    name: "지구",
    type: "",
    nw: 6,
    n: 3,
    e: 4
  },
  {
    name: "달 접근 비행",
    type: "view",
    w: 0,
    e: 3
  },
  {
    name: "달",
    type: "land",
    w: 3
  },
  {
    name: null,
    type: null
  },
  {
    name: null,
    type: null
  }
];

export default function Map() {
  const classes = useStyles();
  const boxEl = React.useRef(null);
  const [widthValue, setWidthValue] = React.useState(0);
  const windowWidth = useWindowSize();

  const { spaceships } = React.useContext(DataContext);

  React.useEffect(() => {
    setWidthValue(boxEl.current.offsetWidth);
  }, [windowWidth]);

  return (
    <Grid container item xs={12} display="flex" className={classes.container}>
      <Grid
        container
        spacing={3}
        item
        style={{
          position: "relative",
          top: widthValue / 10
        }}
      >
        {areas.map((area, index) => {
          return area.name !== null ? (
            <Grid item xs={2} key={index}>
              <Paper
                elevation={0}
                className={classes.area}
                ref={boxEl}
                style={{ height: widthValue }}
              >
                <Box className={classes.areaCol}>
                  {spaceships.map((ship, index) => {
                    if (
                      ship.location === area.name &&
                      ship.assembled === true
                    ) {
                      return <ShipIcon key={index} shipInfo={ship} />;
                    }
                  })}
                </Box>
              </Paper>
            </Grid>
          ) : (
            <Grid item xs={1} key={index} />
          );
        })}
      </Grid>
    </Grid>
  );
}
