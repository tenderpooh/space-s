import React from "react";

import { Typography, Popover } from "@material-ui/core";
import SpaceshipIcon from "./SpaceshipIcon.svg";
import { makeStyles } from "@material-ui/core/styles";

import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(1)
  }
}));

export default function ShipIcon(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <img
        onClick={handleClick}
        src={SpaceshipIcon}
        style={{
          width: "3rem",
          height: "3rem"
        }}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Typography className={classes.typography}>
          <b>{props.shipInfo.name}</b>
        </Typography>
      </Popover>
    </>
  );
}
