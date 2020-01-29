import React, { useState, useContext } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { DataContext } from "../../../backend/DataProvider";
import firebase from "../../../backend/firebase";

export default function AssetPurchase(props) {
  const [open, setOpen] = useState(false);
  const { user } = useContext(DataContext);
  const companyId = user.company;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const confirm = () => {
    console.log(props);
    if (props.buy === true) {
      firebase
        .firestore()
        .collection("Companies")
        .doc(companyId)
        .update({
          fund: firebase.firestore.FieldValue.increment(-props.price),
          "rockets.atlas":
            props.title === "아틀라스 로켓"
              ? firebase.firestore.FieldValue.increment(1)
              : firebase.firestore.FieldValue.increment(0),
          "rockets.soyuz":
            props.title === "소유즈 로켓"
              ? firebase.firestore.FieldValue.increment(1)
              : firebase.firestore.FieldValue.increment(0),
          supplies:
            props.title === "보급품"
              ? firebase.firestore.FieldValue.increment(1)
              : firebase.firestore.FieldValue.increment(0),
          "capsules.capsuleLv1":
            props.title === "10인승 캡슐"
              ? firebase.firestore.FieldValue.increment(1)
              : firebase.firestore.FieldValue.increment(0),
          "capsules.capsuleLv2":
            props.title === "20인승 캡슐"
              ? firebase.firestore.FieldValue.increment(1)
              : firebase.firestore.FieldValue.increment(0),
          "capsules.capsuleLv3":
            props.title === "50인승 캡슐"
              ? firebase.firestore.FieldValue.increment(1)
              : firebase.firestore.FieldValue.increment(0)
        });
    } else {
      firebase
        .firestore()
        .collection("Companies")
        .doc(companyId)
        .update({
          fund: firebase.firestore.FieldValue.increment(props.price),
          "rockets.atlas":
            props.title === "아틀라스 로켓"
              ? firebase.firestore.FieldValue.increment(-1)
              : firebase.firestore.FieldValue.increment(0),
          "rockets.soyuz":
            props.title === "소유즈 로켓"
              ? firebase.firestore.FieldValue.increment(-1)
              : firebase.firestore.FieldValue.increment(0),
          supplies:
            props.title === "보급품"
              ? firebase.firestore.FieldValue.increment(-1)
              : firebase.firestore.FieldValue.increment(0),
          "capsules.capsuleLv1":
            props.title === "10인승 캡슐"
              ? firebase.firestore.FieldValue.increment(-1)
              : firebase.firestore.FieldValue.increment(0),
          "capsules.capsuleLv2":
            props.title === "20인승 캡슐"
              ? firebase.firestore.FieldValue.increment(-1)
              : firebase.firestore.FieldValue.increment(0),
          "capsules.capsuleLv3":
            props.title === "50인승 캡슐"
              ? firebase.firestore.FieldValue.increment(-1)
              : firebase.firestore.FieldValue.increment(0)
        });
    }
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
      >
        {props.buy ? "구매" : "매각"}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          {props.buy ? `${props.title} 구매` : `${props.title} 매각`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.title}을 {props.buy ? "구매" : "매각"}하시겠습니까?
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
