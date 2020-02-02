import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import firebase from "../../../backend/firebase";
import { launchSound, cancelSound, confirmSound } from "../../../sound/Sound";

export default function ConfirmOperation(props) {
  const { shipId, name, assembled, location, destination } = props.data;
  const currentDestination = props.destination;
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const confirm = () => {
    firebase
      .firestore()
      .collection("Spaceships")
      .doc(shipId)
      .update({
        destination: currentDestination,
        routes: firebase.firestore.FieldValue.arrayUnion(currentDestination)
      });
    setOpen(false);
    enqueueSnackbar(`${name} 우주선 운행에 성공하였습니다.`, {
      variant: "success",
      autoHideDuration: 3000
    });
    launchSound.play();
  };
  const handleClickOpen = () => {
    setOpen(true);
    confirmSound.play();
  };

  const handleClose = () => {
    setOpen(false);
    cancelSound.play();
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        size="large"
        variant="contained"
        color="secondary"
        disabled={
          !assembled ||
          location !== destination ||
          location === currentDestination ||
          currentDestination === "도착지"
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
