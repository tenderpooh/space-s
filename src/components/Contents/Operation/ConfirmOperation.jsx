import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import firebase from "../../../backend/firebase";

export default function ConfirmOperation(props) {
  const { shipId, name, assembled, location, destination } = props.data;
  const currentDestination = props.destination;
  const [open, setOpen] = React.useState(false);

  const confirm = () => {
    firebase
      .firestore()
      .collection("Spaceships")
      .doc(shipId)
      .update({ destination: currentDestination });
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        size="large"
        variant="contained"
        color="primary"
        disabled={
          !assembled ||
          location !== destination ||
          location === currentDestination
        }
        fullWidth
      >
        {!assembled ? "조립 중" : location !== destination ? "운행 중" : "운행"}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">우주선 운행</DialogTitle>
        <DialogContent>
          <DialogContentText>
            우주선 [{name}]을(를) [{currentDestination}](으)로 운행하겠습니까?
          </DialogContentText>
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
