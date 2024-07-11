import React, { useEffect } from "react";
import Router from "./routes/Router";
import "./assets/scss/Theme.scss";
import { messaging, getToken, onMessage } from "./firebase";
import { toast } from "react-toastify";

const App = () => {
  useEffect(() => {
    getToken(messaging, { vapidKey: process.env.REACT_APP_FIREBASE_API_KEY })
      .then((currentToken) => {
        if (currentToken) {
          console.log(currentToken);
          // Gửi token này lên server để lưu trữ và sử dụng sau này
          // fetch('/api/save-token', {
          //   method: 'POST',
          //   body: JSON.stringify({ token: currentToken }),
          //   headers: {
          //     'Content-Type': 'application/json'
          //   }
          // });
        } else {
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });

    onMessage(messaging, (payload: any) => {
      console.log("Message received. ", payload);
      // Hiển thị thông báo khi nhận được tin nhắn
      toast.success(payload.notification.body);
    });
  }, []);

  return (
    <div className="App">
      <Router></Router>
    </div>
  );
};

export default App;
