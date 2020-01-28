import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@material-ui/core";
import firebase from "../../../backend/firebase";

export default function NewSpaceship(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const companyId = props.companyId;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleWrite = e => {
    setName(e.currentTarget.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const confirm = () => {
    firebase
      .firestore()
      .collection("Spaceships")
      .add({
        assembled: false,
        capsule: "",
        company: companyId,
        destination: "지구",
        location: "지구",
        name: name,
        passenger: 0,
        supplies: 0,
        junoRockets: 0,
        atlasRockets: 0,
        soyuzRockets: 0,
        saturnRockets: 0,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    setOpen(false);
  };
  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "white"
        }}
      >
        <b>우주선 신규 조립</b>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">신규 우주선 설치</DialogTitle>
        <DialogContent>
          <DialogContentText>
            새로운 우주선의 이름을 지어주십시오.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="우주선 이름"
            type="text"
            fullWidth
            onChange={handleWrite}
            value={name}
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
