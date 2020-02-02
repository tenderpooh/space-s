import React from "react";
import {
  Grid,
  Button,
  Box,
  ClickAwayListener,
  Popper,
  Paper,
  MenuList,
  MenuItem
} from "@material-ui/core";
import { destinations } from "../../../variables/Destinations";
import ConfirmOperation from "./ConfirmOperation";
import { cancelSound, confirmSound, dropdownSound } from "../../../sound/Sound";

import { LocationOn, ArrowDropDown, ArrowRightAlt } from "@material-ui/icons";

export default function ShipOperation(props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { name, location, assembled, destination } = props.data;
  const options = destinations[location.replace(/\s/g, "")];
  console.log(options[selectedIndex]["destination"]);
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
    confirmSound.play();
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
    dropdownSound.play();
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
    cancelSound.play();
  };

  React.useEffect(() => {
    return () => {
      console.log("location changed :", location);
      setSelectedIndex(0);
      console.log("index changed :", selectedIndex);
    };
    // if (location && location !== destination) {
    //   const newIndex = options.findIndex(x => x.destination === destination);
    //   setSelectedIndex(newIndex >= 0 ? newIndex : 0);
    // }
  }, [location]);

  return (
    <Grid container item alignItems="center" spacing={3}>
      <Grid xs={3} item>
        <Button fullWidth size="large" variant="contained" color="secondary">
          <span style={{ flexGrow: 1 }} />
          <span>{name}</span>
          <span style={{ flexGrow: 1 }} />
        </Button>
      </Grid>
      <Grid xs={3} item>
        <Button
          fullWidth
          variant="contained"
          color="default"
          size="large"
          startIcon={<LocationOn />}
        >
          <span style={{ flexGrow: 1 }} />
          {location}
          <span style={{ flexGrow: 1 }} />
        </Button>
      </Grid>
      <Grid xs={1} item>
        <Box display="flex" justifyContent="center">
          <ArrowRightAlt width="100%" />
        </Box>
      </Grid>
      <Grid xs={3} item>
        <Button
          fullWidth
          variant="contained"
          size="large"
          startIcon={<LocationOn />}
          endIcon={<ArrowDropDown />}
          onClick={handleToggle}
          ref={anchorRef}
          disabled={!assembled || location !== destination}
        >
          <span style={{ flexGrow: 1 }} />
          <span>{options[selectedIndex]["destination"]}</span>
          <span style={{ flexGrow: 1 }} />
        </Button>
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
                    key={option.destination}
                    selected={index === selectedIndex}
                    onClick={event => handleMenuItemClick(event, index)}
                  >
                    {option.destination}
                  </MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popper>
      </Grid>
      <Grid xs={2} item>
        <ConfirmOperation
          data={props.data}
          destination={options[selectedIndex]["destination"]}
        />
      </Grid>
    </Grid>
  );
}
