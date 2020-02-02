import React, { useState, useContext } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slider
} from "@material-ui/core";
import { DataContext } from "../../../backend/DataProvider";
import firebase from "../../../backend/firebase";

export default function PurchaseCustomer(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const { user, game } = useContext(DataContext);
  const companyId = user.company;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const confirm = () => {
    firebase
      .firestore()
      .collection("Companies")
      .doc(companyId)
      .update({
        "customer.moon":
          props.title === "달 관람/착륙"
            ? firebase.firestore.FieldValue.increment(value)
            : firebase.firestore.FieldValue.increment(0)
      });
    firebase
      .firestore()
      .collection("Game")
      .doc("gI3rH7qbIO2zDYkwZsB3")
      .update({
        moonCustomer:
          props.title === "달 관람/착륙"
            ? firebase.firestore.FieldValue.increment(-value)
            : firebase.firestore.FieldValue.increment(0)
      });

    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        size="small"
        fullWidth
        style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
        onClick={handleClickOpen}
        disabled={props.customer <= 0}
      >
        모객
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            '{props.title}' 고객을 모객하시겠습니까?
          </DialogContentText>
          <Slider
            defaultValue={0}
            valueLabelDisplay="auto"
            step={10}
            min={10}
            max={50 > game.moonCustomer ? game.moonCustomer : 50}
            value={value}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            취소
          </Button>
          <Button onClick={confirm} color="primary" autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
