import React, { useEffect, useState } from "react";
import WebRouter from "./router/WebRouter";
import MobileRouter from "./router/MobileRouter";
import './App.css';
import "./PwAApp.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserView, MobileView } from "react-device-detect";
// import Slide from '@mui/material/Slide';
// import Dialog from '@mui/material/Dialog';
// import Button from "@mui/material/Button";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";

// import { contextMenu, detectBrowser } from "./util/Helper";
// import { Constants } from "./common/constant/localstorage";
// import CloseWhite from "./assets/images/icons/close-white.svg";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

function App() {
  
  // const [offlineOpen, setOfflineOpen] = useState(true);
  // const [onlineOpen, setOnlineOpen] = useState(false);
  // const [onlineModal, setOnlineModal] = useState(false);
  // const [offlineModal, setOfflineModal] = useState(false);
  // const [online, setOnline] = useState();
  // const [offline, setOffline] = useState(false);


  // useEffect(() => {
  //   // contextMenu();
  //   // localStorage.setItem(Constants.DEVICE_NAME, detectBrowser());
  //   function handleOnline() {
  //     console.log("called", offline);
  //     if (offline !== undefined) {
  //       setOnline(true);
  //       setOffline(false);
  //     }
  //   }

  //   function handleOffline() {
  //     setOnline(false);
  //   }

  //   window.addEventListener("online", handleOnline);
  //   window.addEventListener("offline", handleOffline);

  //   return () => {
  //     window.removeEventListener("online", handleOnline);
  //     window.removeEventListener("offline", handleOffline);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (online === true) {
  //     setOnlineModal(true);
  //     setOfflineModal(false);
  //   } else if (online === false) {
  //     setOfflineModal(true);
  //     setOnlineModal(false);
  //   }
  // }, [online]);

  // function handleOnline() {
  //   setOnlineModal(false);
  // }

  // function handleOffline() {
  //   setOfflineModal(false);
  // }

  // function handleOfflineFlag() {
  //   setOffline(true);
  // }

  // const handleOfflineClose = () => {
  //   setOfflineOpen(true);
  //   setOnlineOpen(true);
  // };
  // const handleOnlineClose = () => {
  //   setOfflineOpen(true);
  //   setOnlineOpen(false);
  // };
  return (
    <Provider store={store}>
    <div className="App">
   
      <BrowserView>
      <WebRouter />
        {/* <Dialog
          fullWidth={true}
          maxWidth={"lg"}
          open={offlineModal}
          TransitionComponent={Transition}
          keepMounted
          className="Offline NavigatorDialog"
          onClose={handleOfflineFlag}
        >
          <DialogContent>
            <div className="relative">
              <DialogTitle>
                You are offline now, Please check your Internet connection.
              </DialogTitle>
            </div>
          </DialogContent>
        </Dialog>
       
        <Dialog
          fullWidth={true}
          maxWidth={"lg"}
          open={onlineModal}
          TransitionComponent={Transition}
          keepMounted
          className="Online NavigatorDialog"
        >
          <DialogContent>
            <div className="relative">
              <DialogTitle>You are back online again.</DialogTitle>
              <Button onClick={handleOnline} color="primary">
                <img src={CloseWhite} alt="CloseWhite" />
              </Button>
            </div>
          </DialogContent>
        </Dialog> */}
        
        
      </BrowserView>
      <MobileView>
        <MobileRouter />
      </MobileView>
    </div>
  </Provider>
  );
}

export default App;
