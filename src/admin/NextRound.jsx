import React, { useState, useContext } from "react";
import { DataContext } from "../backend/DataProvider";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import firebase from "../backend/firebase";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export default function NextRound() {
  const { game } = useContext(DataContext);

  const nextRound = () => {
    firebase
      .firestore()
      .collection("Game")
      .doc("gI3rH7qbIO2zDYkwZsB3")
      .update({
        round: firebase.firestore.FieldValue.increment(1),
        "time.seconds": Date.now() / 1000 + 600
      });

    firebase
      .firestore()
      .collection("Spaceships")
      .doc("gI3rH7qbIO2zDYkwZsB3")
      .update({
        round: firebase.firestore.FieldValue.increment(1),
        "time.seconds": Date.now() / 1000 + 600
      });
    firebase
      .firestore()
      .collection("Spaceships")
      .get()
      .then(qs => {
        qs.forEach(doc => {
          firebase
            .firestore()
            .collection("Spaceships")
            .doc(doc.id)
            .update({
              location: doc.data().destination
            });
        });
      });
  };

  return (
    <ListItem button onClick={nextRound}>
      <ListItemIcon>
        <ArrowForwardIcon />
      </ListItemIcon>
      <ListItemText primary={"다음 라운드"} />
    </ListItem>
  );
}

// - [사업 현황] 라운드 숫자 변경
// - [사업 현황] 남은 시간 리셋
// - [고객 서비스] 우주 현황 트렌드 -> 뉴스 반영
// - [지도] 우주선 이동 (이전에 CEO가 운행을 설정한 방향으로 이동)

// - [사업 현황] 그래프 변경
// - [사업 현황] 글로벌 우주 여행사 순위 변동
// - [사업 현황] 업적 현황 리셋
// - [고객 서비스] 여행 중 고객 현황 -> 우주선별로 만족도 표시
// - [고객 서비스] 여행 패키지 시장 가격
