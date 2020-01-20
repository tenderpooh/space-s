import React from "react";
import {
  Grid,
  Button,
  ButtonGroup,
  Box,
  ClickAwayListener,
  Popper,
  Paper,
  MenuList,
  MenuItem
} from "@material-ui/core";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { LocationOn } from "@material-ui/icons";

const options = ["도착지", "탄도 비행", "달 접근 비행"];

export default function ShipOperation(props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    console.log(anchorRef.current.contains(event.target));
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  return (
    <Grid container item alignItems="center" spacing={3}>
      <Grid item>
        <Button size="large" variant="contained" color="primary">
          걸어서달까지 {props.no}호
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="default"
          size="large"
          startIcon={<LocationOn />}
        >
          지구 궤도
        </Button>
      </Grid>
      <Grid item>
        <Box display="flex">⟶</Box>
      </Grid>
      <Grid item>
        <ButtonGroup variant="contained" color="default" ref={anchorRef}>
          <Button
            variant="contained"
            size="large"
            startIcon={<LocationOn />}
            onClick={handleToggle}
          >
            {options[selectedIndex]}
          </Button>
          <Button color="default" size="small" onClick={handleToggle}>
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          style={{ zIndex: 1 }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList id="split-button-menu">
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
        <Button size="large" variant="contained" color="primary">
          결정
        </Button>
      </Grid>
    </Grid>
  );
}
