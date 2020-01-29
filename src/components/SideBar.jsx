import React, { useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { AppContext } from "../context/AppProvider";
import route from "../route/Route";
import NextRound from "../admin/NextRound";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: 200,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  }
}));

export default function SideBar() {
  const classes = useStyles();
  const { menuOpened, menuToggle, content, contentSelect } = useContext(
    AppContext
  );

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: menuOpened,
        [classes.drawerClose]: !menuOpened
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: menuOpened,
          [classes.drawerClose]: !menuOpened
        })
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={menuToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {route.map(option => (
          <ListItem
            button
            key={option.text}
            onClick={() => {
              contentSelect(option.text);
            }}
            selected={option.text === content}
          >
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText primary={option.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <NextRound />
      </List>
    </Drawer>
  );
}
