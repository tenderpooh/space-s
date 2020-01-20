import React from "react";
import {
  Button,
  ButtonGroup,
  Paper,
  Box,
  Divider,
  Grid,
  MenuItem,
  ClickAwayListener,
  Popper,
  MenuList
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LocationOn, ArrowDropDown } from "@material-ui/icons";

const options = ["도착지", "탄도 비행", "달 접근 비행"];

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    width: "100%",
    marginBottom: 10
  }
}));

export default function SetPath() {
  const classes = useStyles();
  const anchorRef = React.useRef(null);

  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  return (
    <Paper className={classes.paper}>
      <Box fontWeight="fontWeightBold">항로 설정</Box>
      <Divider style={{ width: "100%", marginTop: 5, marginBottom: 10 }} />
      <Grid container item alignItems="center" justify="space-between">
        <Grid item>
          <Button
            variant="contained"
            color="default"
            size="small"
            startIcon={<LocationOn />}
          >
            지구
          </Button>
        </Grid>
        <Grid item>
          <Box display="flex">⟶</Box>
        </Grid>
        <Grid item>
          <ButtonGroup variant="contained" color="primary" ref={anchorRef}>
            <Button
              size="small"
              startIcon={<LocationOn />}
              onClick={handleToggle}
            >
              {options[selectedIndex]}
            </Button>
            <Button size="small" onClick={handleToggle}>
              <ArrowDropDown />
            </Button>
          </ButtonGroup>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
            style={{ zIndex: 1 }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={event => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Popper>
        </Grid>
        <Grid item>
          <Box display="flex">⟶</Box>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="default"
            size="small"
            startIcon={<LocationOn />}
          >
            지구
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
