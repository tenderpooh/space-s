import React from "react";
import { Grid, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  area: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.palette.text.secondary
  },
  areaCol: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
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
    name: "화성 접근 비행",
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
    name: "데이모스",
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
  }
];

export default function Map() {
  const classes = useStyles();
  const boxEl = React.useRef(null);
  const [widthValue, setWidthValue] = React.useState(0);
  const windowWidth = useWindowSize();

  React.useEffect(() => {
    setWidthValue(boxEl.current.offsetWidth);
  }, [windowWidth]);

  return (
    <Grid container item xs={12} spacing={3} display="flex">
      {areas.map((area, index) => {
        return (
          <Grid item xs={2} key={index}>
            {area.name !== null && (
              <Paper
                className={classes.area}
                ref={boxEl}
                style={{ height: widthValue }}
              >
                <Box className={classes.areaCol}>
                  {area.nw !== undefined ? <Box>↖</Box> : <Box />}
                  {area.n !== undefined ? <Box>↑</Box> : <Box />}
                  {area.ne !== undefined ? <Box>↗</Box> : <Box />}
                </Box>
                <Box className={classes.areaCol}>
                  {area.w !== undefined ? <Box>←</Box> : <Box />}
                  <Box>
                    <Box>{area.name}</Box>
                    <Box>{area.type}</Box>
                  </Box>
                  {area.e !== undefined ? <Box>→</Box> : <Box />}
                </Box>

                <Box className={classes.areaCol}>
                  {area.sw !== undefined ? <Box>↙</Box> : <Box />}
                  {area.s !== undefined ? <Box>↓</Box> : <Box />}
                  {area.se !== undefined ? <Box>↘</Box> : <Box />}
                </Box>
              </Paper>
            )}
          </Grid>
        );
      })}
    </Grid>
  );
}
