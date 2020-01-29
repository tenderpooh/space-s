import React, { useState, createContext, useEffect } from "react";
import firebase from "./firebase";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const getDataFromDb = (userData, companyId) => {
    firebase
      .firestore()
      .collection("Companies")
      .doc(companyId)
      .onSnapshot(snapshot => {
        const companyData = snapshot.data();
        setData(prevData => {
          return {
            ...prevData,
            user: userData,
            company: companyData
          };
        });
      });
    firebase
      .firestore()
      .collection("Spaceships")
      .where("company", "==", companyId)
      .onSnapshot(snapshot => {
        let ships = [];
        snapshot.forEach(doc => {
          ships.push(Object.assign(doc.data(), { shipId: doc.id }));
        });
        setData(prevData => {
          return {
            ...prevData,
            spaceships: ships.sort((a, b) => {
              return a.createdAt < b.createdAt
                ? -1
                : a.createdAt > b.createdAt
                ? 1
                : 0;
            })
          };
        });
      });
    firebase
      .firestore()
      .collection("Game")
      .onSnapshot(snapshot => {
        const gameData = snapshot.docs[0].data();
        setData(prevData => {
          return {
            ...prevData,
            game: gameData
          };
        });
      });
  };

  const nullData = {
    user: {
      id: "null",
      company: "",
      role: ""
    },
    company: {
      fund: 0,
      member: [],
      name: "Loading...",
      profit: 0,
      capsules: {
        capsuleLv1: 0,
        capsuleLv2: 0,
        capsuleLv3: 0
      },
      rockets: {
        atlas: 0,
        soyuz: 0
      },
      customer: {
        mars: 0,
        jupiter: 0,
        etc: 0,
        moon: 0
      },
      passenger: 0,
      supplies: 0
    },
    game: {
      round: 0,
      time: { seconds: 0 },
      moonCustomer: 0,
      moonPrice: 0
    },
    spaceships: []
  };

  const [data, setData] = useState(nullData);

  useEffect(() => {
    async function fetchData() {
      const userQuery = await firebase
        .firestore()
        .collection("Users")
        .where("id", "==", localStorage.getItem("id"))
        .get();
      const userData = await userQuery.docs[0].data();
      const companyId = await userQuery.docs[0].data().company;
      await getDataFromDb(userData, companyId);
    }
    fetchData();
  }, []);
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
