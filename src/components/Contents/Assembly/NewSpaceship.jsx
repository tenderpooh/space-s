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
import { useSnackbar } from "notistack";
import { dropdownSound, cancelSound, confirmSound } from "../../../sound/Sound";

export default function NewSpaceship(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const companyId = props.companyId;
  const { enqueueSnackbar } = useSnackbar();

  const handleClickOpen = () => {
    confirmSound.play();
    setOpen(true);
  };

  const handleWrite = e => {
    setName(e.currentTarget.value);
  };

  const handleClose = () => {
    cancelSound.play();
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
        customer: 0,
        customerType: "",
        supplies: 0,
        atlasRockets: 0,
        soyuzRockets: 0,
        issues: 0,
        satisfaction: 100,
        routes: ["지구"],
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    setOpen(false);
    dropdownSound.play();
    enqueueSnackbar(`새로운 우주선이 준비되었습니다. 조립을 시작하십시오.`, {
      variant: "success",
      autoHideDuration: 3000
    });
  };
  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{
          height: "100%",
          width: "100%"
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
