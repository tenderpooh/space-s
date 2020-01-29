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
    atlasRockets,
    soyuzRockets,
    customer,
    customerType,
    supplies,
    capsule
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
        "rockets.atlas": firebase.firestore.FieldValue.increment(atlasRockets),
        "rockets.soyuz": firebase.firestore.FieldValue.increment(soyuzRockets),
        "customer.mars":
          customerType === "mars"
            ? firebase.firestore.FieldValue.increment(customer)
            : firebase.firestore.FieldValue.increment(0),
        "customer.jupiter":
          customerType === "jupiter"
            ? firebase.firestore.FieldValue.increment(customer)
            : firebase.firestore.FieldValue.increment(0),
        "customer.moon":
          customerType === "moon"
            ? firebase.firestore.FieldValue.increment(customer)
            : firebase.firestore.FieldValue.increment(0),
        "customer.etc":
          customerType === "etc"
            ? firebase.firestore.FieldValue.increment(customer)
            : firebase.firestore.FieldValue.increment(0),
        supplies: firebase.firestore.FieldValue.increment(supplies),
        "capsules.capsuleLv1":
          capsule === "capsuleLv1"
            ? firebase.firestore.FieldValue.increment(1)
            : firebase.firestore.FieldValue.increment(0),
        "capsules.capsuleLv2":
          capsule === "capsuleLv2"
            ? firebase.firestore.FieldValue.increment(1)
            : firebase.firestore.FieldValue.increment(0),
        "capsules.capsuleLv3":
          capsule === "capsuleLv3"
            ? firebase.firestore.FieldValue.increment(1)
            : firebase.firestore.FieldValue.increment(0)
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
        customer: 0,
        customerType: "",
        supplies: 0,
        atlasRockets: 0,
        soyuzRockets: 0
      });
    inputInit();
  };

  const assemble = () => {
    console.log(props.input);
    firebase
      .firestore()
      .collection("Companies")
      .doc(company)
      .update({
        "rockets.atlas": firebase.firestore.FieldValue.increment(
          -props.input.atlasRockets
        ),
        "rockets.soyuz": firebase.firestore.FieldValue.increment(
          -props.input.soyuzRockets
        ),
        "customer.mars":
          props.input.customerType === "mars"
            ? firebase.firestore.FieldValue.increment(-props.input.customer)
            : firebase.firestore.FieldValue.increment(0),
        "customer.jupiter":
          props.input.customerType === "jupiter"
            ? firebase.firestore.FieldValue.increment(-props.input.customer)
            : firebase.firestore.FieldValue.increment(0),
        "customer.moon":
          props.input.customerType === "moon"
            ? firebase.firestore.FieldValue.increment(-props.input.customer)
            : firebase.firestore.FieldValue.increment(0),
        "customer.etc":
          props.input.customerType === "etc"
            ? firebase.firestore.FieldValue.increment(-props.input.customer)
            : firebase.firestore.FieldValue.increment(0),
        supplies: firebase.firestore.FieldValue.increment(
          -props.input.supplies
        ),
        "capsules.capsuleLv1":
          props.input.capsule === "capsuleLv1"
            ? firebase.firestore.FieldValue.increment(-1)
            : firebase.firestore.FieldValue.increment(0),
        "capsules.capsuleLv2":
          props.input.capsule === "capsuleLv2"
            ? firebase.firestore.FieldValue.increment(-1)
            : firebase.firestore.FieldValue.increment(0),
        "capsules.capsuleLv3":
          props.input.capsule === "capsuleLv3"
            ? firebase.firestore.FieldValue.increment(-1)
            : firebase.firestore.FieldValue.increment(0)
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
        style={{ marginTop: "1rem" }}
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
