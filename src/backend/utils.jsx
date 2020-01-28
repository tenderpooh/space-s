import firebase from "./firebase";

export const confirmLogin = async (id, pw) => {
  let loginMsg = "";
  let loginResult = false;
  if (id !== "") {
    await firebase
      .firestore()
      .collection("Users")
      .where("id", "==", id)
      .get()
      .then(querySnapshot => {
        if (querySnapshot.empty) {
          loginMsg = "아이디를 확인해주십시오.";
          loginResult = false;
        } else {
          if (querySnapshot.docs[0].data().pw === String(pw)) {
            loginMsg = "";
            loginResult = true;
          } else {
            loginMsg = "비밀번호를 확인해주십시오.";
            loginResult = false;
          }
        }
      })
      .catch(err => console.log(err));
  }

  return [loginMsg, loginResult];
};
