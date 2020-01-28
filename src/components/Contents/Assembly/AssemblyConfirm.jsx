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

export default function AssemblyConfirm(props) {
  const {
    shipId,
    assembled,
    company,
    junoRockets,
    atlasRockets,
    soyuzRockets,
    saturnRockets,
    passenger,
    supplies
  } = props.spaceship;
  const { inputInit } = props;
  const [open, setOpen] = React.useState(false);
  const [isAssembled, setIsAssembled] = React.useState(assembled);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dissemble = () => {
    firebase
      .firestore()
      .collection("Companies")
      .doc(company)
      .update({
        junoRockets: firebase.firestore.FieldValue.increment(junoRockets),
        atlasRockets: firebase.firestore.FieldValue.increment(atlasRockets),
        soyuzRockets: firebase.firestore.FieldValue.increment(soyuzRockets),
        saturnRockets: firebase.firestore.FieldValue.increment(saturnRockets),
        passenger: firebase.firestore.FieldValue.increment(passenger),
        supplies: firebase.firestore.FieldValue.increment(supplies)
      });
    firebase
      .firestore()
      .collection("Spaceships")
      .doc(shipId)
      .update({
        assembled: false,
        capsule: "",
        destination: "지구",
        location: "지구",
        passenger: 0,
        supplies: 0,
        junoRockets: 0,
        atlasRockets: 0,
        soyuzRockets: 0,
        saturnRockets: 0
      });
    inputInit();
  };

  const assemble = () => {
    firebase
      .firestore()
      .collection("Companies")
      .doc(company)
      .update({
        junoRockets: firebase.firestore.FieldValue.increment(
          -props.input.junoRockets
        ),
        atlasRockets: firebase.firestore.FieldValue.increment(
          -props.input.atlasRockets
        ),
        soyuzRockets: firebase.firestore.FieldValue.increment(
          -props.input.soyuzRockets
        ),
        saturnRockets: firebase.firestore.FieldValue.increment(
          -props.input.saturnRockets
        ),
        passenger: firebase.firestore.FieldValue.increment(
          -props.input.passenger
        ),
        supplies: firebase.firestore.FieldValue.increment(-props.input.supplies)
      });
    firebase
      .firestore()
      .collection("Spaceships")
      .doc(shipId)
      .update(Object.assign(props.input, { assembled: true }));
  };

  const confirm = () => {
    isAssembled ? dissemble() : assemble();
    setOpen(false);
  };

  React.useEffect(() => {
    setIsAssembled(assembled);
    if (assembled === false) {
      inputInit();
    }
  }, [assembled, props.spaceship]);

  return (
    <>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        color={isAssembled ? "secondary" : "primary"}
        fullWidth
        size="small"
      >
        {isAssembled ? "우주선 분해" : "우주선 조립"}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          {isAssembled ? "우주선 분해" : "우주선 조립"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {isAssembled
              ? "우주선을 분해하여 재조립하겠습니까?"
              : "우주선 조립을 완료하겠습니까?"}
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
