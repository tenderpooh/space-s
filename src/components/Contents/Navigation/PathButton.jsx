import React from "react";
import {
  Box,
  Button,
  Paper,
  Grid,
  MenuItem,
  ClickAwayListener,
  Popper,
  MenuList
} from "@material-ui/core";
import { LocationOn, ArrowDropDown } from "@material-ui/icons";
import { destinations } from "../../../variables/Destinations";

export default function PathButton(props) {
  const anchorRef = React.useRef(null);

  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const { destination, paths, setPaths, num } = props;

  const options = destinations[destination.replace(/\s/g, "")];

  const handleMenuItemClick = (event, index) => {
    if (index !== 0) {
      setSelectedIndex(index);
      setOpen(false);
      console.log(`length : ${paths.length} / num : ${num}`);
      paths.length > num
        ? setPaths(paths.slice(0, num).concat([options[index]]))
        : setPaths(paths.concat([options[index]]));
      // options[index].destination === "지구" && setPaths(paths.slice(0, num));
    } else {
      setOpen(false);
    }
  };

  const handleToggle = () => {
    console.log(num);
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  React.useEffect(() => {
    return () => {
      setSelectedIndex(0);
    };
  }, [props.destination]);
  return (
    <>
      <Grid item>
        <Box display="flex">⟶</Box>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          size="small"
          ref={anchorRef}
          startIcon={<LocationOn />}
          endIcon={<ArrowDropDown />}
          onClick={handleToggle}
        >
          {selectedIndex > options.length
            ? "도착지"
            : options[selectedIndex].destination}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          transition
          disablePortal
          style={{ zIndex: 1 }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList>
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
      {/* <Grid item>
        <Box display="flex">⟶</Box>
      </Grid> */}
    </>
  );
}
