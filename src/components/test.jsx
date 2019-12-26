import React, { useState, useEffect } from "react";
import firebase from "../backend/firebase";

const Test = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("test")
      .onSnapshot(snapshot => {
        const newTests = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTests(newTests);
      });
  }, []);
  return (
    <div>
      <h1>Here's my dataset.</h1>
      {tests.map(test => (
        <li key={test.id}>{test.result}</li>
      ))}
    </div>
  );
};

export default Test;
