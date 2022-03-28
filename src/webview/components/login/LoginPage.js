import React, { useState, useEffect } from "react";
import { Link ,useNavigate } from "react-router-dom";
import AuthIllustration from "../../../assets/images/login-Illustration.svg";
import Button from "@mui/material/Button";
import LoginForm from "./LoginForm";
import RegisterRequestPopup from "./popup/RegisterRequestPopup";
import { Constants } from "../../../common/constant/localstorage";
const LoginPage = (props) => {
  const navigate = useNavigate();
  const {
    loginResult,
    validateREGISTERResult,
    validateREGISTER,
  } = props;
  
 

  const remember = sessionStorage.getItem(Constants.REMEMBER_ME);
  const u_name = sessionStorage.getItem(Constants.U_NAME);

  const [inputs, setInputs] = useState({
    username: u_name ? u_name : "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: false,
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [errMsgPop, setErrorMsgPop] = useState("");
  const [sucMsgPop, setSucMsgPop] = useState("");
  const [status, setStatus] = useState("");
  const [action, setAction] = useState(0);
  const [searchCount, setSearchCount] = useState(0);
  const [checked, setChecked] = React.useState(remember ? remember : false);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const [popupFlag, setPopupFlag] = useState(false);
  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          localStorage.setItem(Constants.LATITUDE, position.coords.latitude);
          localStorage.setItem(Constants.LONGITUDE, position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };
 

  const handleChange = (e) => {
    let { name, value } = e.target;

    setErrorMsg("");
    setErrors({ ...errors, [name]: false });

    if (name === "username") {
      if (value.length > 10) {
        value = value.slice(0, 10);
      } else {
        if (value.length === 10) {
          const body = {
            c_mobile_no: value,
          };
          setAction(0);
          setPopupFlag(true);
          validateREGISTER(body);
        }
        setInputs({ ...inputs, [name]: value });
      }
    } else if (name === "rememberme") {
      // console.log(e.target.checked,"<<<<<<<<<<<<<<< checked value")
      setChecked(e.target.checked);
    } else {
      if (value.length > 16) {
        value = value.slice(0, 16);
      } else {
        setInputs({ ...inputs, [name]: value });
      }
    }
  };

  const handleFocus = (e) => {
    let { name, value } = e.target;

    setErrors({ ...errors, [name]: false });
  };

  const handleBlur = (e) => {
    let { name, value } = e.target;

    if (name === "username") {
      if (value.length === 0) {
        setErrors({ ...errors, [name]: "Please enter the number" });
      } else if (value.length <= 10) {
        if (!/^[6-9]\d{9}$/.test(value)) {
          setErrors({ ...errors, [name]: "Please enter valid mobile number" });
        }
      } else if (value.length > 10) {
        setErrors({ ...errors, [name]: "More then 10 numbers not allowed" });
      }
    } else if (name === "password") {
      if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,16}$/.test(
          value
        ) &&
        errors.username === ""
      ) {
        setErrors({ ...errors, [name]: true });
      }
    }
  };

  const login = (event) => {
    event.preventDefault();
    if (inputs.username === "" && errors.username !== false) {
      setErrors({ ...errors, username: "Please enter the number" });
    } else if (inputs.password === "" || errors.password === true) {
      setErrors({ ...errors, password: true });
    } else {
      props.login(inputs);
    }
  };

  const forgot = (event) => {
    setAction(event);
    setErrors({ ...errors, password: false });
    setInputs({ ...inputs, password: "" });
    if (inputs.username === "") {
      setErrors({ ...errors, username: true });
    } else {
      let user_name = inputs.username;
      const body = {
        c_username: user_name,
        page: "login",
      };

      if (user_name.length == 10) {
        if (!/^[6-9]\d{9}$/.test(user_name)) {
          setErrors({ ...errors, username: true });
        } else {
          const body = {
            c_mobile_no: inputs.username,
          };
          setPopupFlag(true);
          validateREGISTER(body);
        }
      } else {
        setErrors({ ...errors, username: true });
      }
    }
  };

  const requestOTP = (event) => {
    setAction(event);
    if (inputs.username === "") {
      setErrors({ ...errors, username: true });
    } else {
      let user_name = inputs.username;
      localStorage.setItem("NLOGIN", 1);
      const body = {
        c_username: user_name,
        page: "login",
      };

      if (user_name.length == 10) {
        if (!/^[6-9]\d{9}$/.test(user_name)) {
          setErrors({ ...errors, username: true });
        } else {
          const body = {
            c_mobile_no: inputs.username,
          };
          setPopupFlag(true);
          validateREGISTER(body);
        }
      } else {
        setErrors({ ...errors, username: true });
      }
    }
  };


  useEffect(() => {
    const vall = localStorage.getItem(Constants.PRE_LOGIN_SEARCH_COUNT);
    const initiate = localStorage.getItem("WEB_LOAD_INITIATE");
    setSearchCount(vall);

    localStorage.clear();
   
    if (initiate === "INITIATED") {
      localStorage.setItem(Constants.PRE_LOGIN_SEARCH_COUNT, vall);
    } else {
      localStorage.setItem(Constants.PRE_LOGIN_SEARCH_COUNT, 0);
    }

    localStorage.setItem("WEB_LOAD_INITIATE", "INITIATED");
  }, []);

  const handleClickOpen = () => {
    // setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   if (validateREGISTERResult.statuscode === 2 && popupFlag === true) {
      
  //     if (inputs.username !== "") {
  //       if (validateREGISTERResult.message === "Already registered!") {
  //         if (action === 1) {
  //           const body = {
  //             c_username: inputs.username,
  //             page: "login",
  //           };
  //           props.SendOTP(body);
            
  //           navigate.push(`/forgot-password/${inputs.username}`);
  //         } else if (action === 2) {
  //           const body = {
  //             c_username: inputs.username,
  //             page: "login",
  //           };
  //           props.SendOTP(body);
  //           navigate.push(`/verify-otp/buyer`);
  //         }
  //       } else if (
  //         validateREGISTERResult.message === "Mobile Number exist in LC1" &&
  //         popupFlag === true
  //       ) {
          
  //       }
  //     }
  //   } else if (validateREGISTERResult.statuscode === 4 && popupFlag === true) {
  //     setOpen(true);
  //     setStatus(validateREGISTERResult.statuscode);
  //     setPopupFlag(false);
  //     setErrorMsgPop(validateREGISTERResult.error);
  //   } else if (validateREGISTERResult.statuscode === 5 && popupFlag === true) {
  //     setStatus(validateREGISTERResult.statuscode);
  //     setErrorMsgPop(validateREGISTERResult.error);
  //     setPopupFlag(false);
  //     setOpen(true);
  //   }
  //   return () => {
  //     props.SendOTPLoading();
  //   };
  // }, [validateREGISTERResult]);

  // useEffect(() => {
  //   if (inputs.username !== "") {
  //     if (props.loginResult.error !== "") {
  //       setErrorMsg(props.loginResult.error);
  //       setOpen(true);
  //       setStatus(loginResult.statuscode);
  //       setErrorMsgPop(loginResult.error);
  //     }
  //     else if (
  //       loginResult.payload !== undefined &&
  //       loginResult.payload.c_lc_user_active_status === "A"
  //     ) {
  //       if (loginResult.payload.c_lc_user_status === "0") {
  //         if (loginResult.payload.c_update_status === "0") {
  //           if (loginResult.payload.cType === "B") {
  //             navigate.push(`/register-details/buyer`);
  //           } else if (loginResult.payload.cType === "S") {
  //             navigate.push(`/register-details/seller`);
  //           }
  //         } else if (loginResult.payload.c_update_status === "1") {
  //           if (checked) {
  //             sessionStorage.setItem(Constants.REMEMBER_ME, checked);
  //             sessionStorage.setItem(Constants.U_NAME, inputs.username);
  //           } else {
  //             sessionStorage.setItem(Constants.REMEMBER_ME, "");
  //             sessionStorage.setItem(Constants.U_NAME, "");
  //           }
          
  //           navigate.push('/home')

           
  //         }
  //       } else if (loginResult.payload.c_lc_user_status === "1") {
  //         if (loginResult.payload.c_update_status === "0") {
  //           if (loginResult.payload.cType === "B") {
  //             navigate.push(`/register-details/buyer`);
  //           } else if (loginResult.payload.cType === "S") {
  //             navigate.push(`/register-details/seller`);
  //           }
  //         } else if (loginResult.payload.c_update_status === "1") {
  //           navigate.push(`/combine-store-name`);
  //         }
  //       }
  //     }

    
  //   }
  // }, [loginResult.statuscode === 0]);

  // useEffect(() => {
  //   if (inputs.username !== "") {

  //     if (props.loginResult.error !== "") {
  //       setErrorMsg(props.loginResult.error);
  //       setOpen(true);
  //       setStatus(loginResult.statuscode);
  //       setErrorMsgPop(loginResult.error);
  //     }
  //   } else if (inputs.username) {
  //     localStorage.setItem("MOBILE NO", inputs.username);
  //   }
  // }, [loginResult.statuscode === 5]);

  // useEffect(() => {
  //   if (
  //     loginResult.statuscode === 100 ||
  //     loginResult.statuscode === 11 ||
  //     validateREGISTERResult.statuscode === 100
  //   ) {
  //     if (inputs.username !== "") {
  //       if (loginResult.error !== "") {
  //         setErrorMsg(loginResult.error);
  //         setStatus(loginResult.statuscode);
  //         setErrorMsgPop(loginResult.error);
  //         setOpen(true);
  //         // console.log(loginResult,inputs.username)
  //       } else if (validateREGISTERResult.error !== "") {
  //         setErrorMsg(validateREGISTERResult.error);
  //         setStatus(validateREGISTERResult.statuscode);
  //         setErrorMsgPop(validateREGISTERResult.error);
  //         setOpen(true);
  //       }
  //     }
  //   }
  // }, [loginResult, validateREGISTERResult]);

  return (
    <>
      <RegisterRequestPopup
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
        status={status}
        errormsg={errMsgPop}
        successMsg={sucMsgPop}
      />

      <div className="auth-container">
        <div className="auth-left-container">
          <div className="space-3">
            {/* <Suspense fallback={<div>loading</div>}>  */}
            {/* <LottiAnimations
              Illustration={Illustration1}
              
              height="850"
              width="650"
            /> */}
            <img src={AuthIllustration} alt="AuthIllustration" />
            {/* </Suspense> */}
          </div>
        </div>
        <div className="auth-right-container">
          <div className="auth-links">
            <span className="auth-text">Don't have an account?</span>
            <Link to="/register/buyer">
              <Button
                variant="outlined"
                className="top-btn default-btn default-width fixed-space"
              >
                Get Started
              </Button>
            </Link>
          </div>
          <div className="auth-form">
            <LoginForm
              handleChange={handleChange}
              handleFocus={handleFocus}
              handleBlur={handleBlur}
              login={login}
              forgot={forgot}
              requestOTP={requestOTP}
              inputs={inputs}
              errors={errors}
              errorMsg={errorMsg}
              // loading={props.loginResult.loading}
              checked={checked}
              setErrors={setErrors}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
