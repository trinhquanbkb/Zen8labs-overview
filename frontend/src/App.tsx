import React, { useEffect } from "react";
import Router from "./routes/Router";
import "./assets/scss/Theme.scss";
import { messaging, getToken } from "./firebase";
import { useSetTokenFCMMutation } from "./api/notification";

const App = () => {
  const [apiSetTokenFCM] = useSetTokenFCMMutation();

  useEffect(() => {
    getToken(messaging, { vapidKey: process.env.REACT_APP_FIREBASE_API_KEY })
      .then(async (currentToken) => {
        if (currentToken) {
          await apiSetTokenFCM({ token_fcm: currentToken });
        } else {
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });
  }, []);

  return (
    <div className="App">
      <Router></Router>
    </div>
  );
};

export default App;
