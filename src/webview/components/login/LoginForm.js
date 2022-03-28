import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

// import CopyRightsContainer from "../copyRights/CopyRightsContainer";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Constants } from "../../../common/constant/localstorage";

import eye from "../../../assets/images/eye.svg";
import eyeOff from "../../../assets/images/eyeOff.svg";
import smartphone from "../../../assets/images/smartphone.svg";
import password from "../../../assets/images/password.svg";

/**
* @author
* @function LoginForm
**/

const LoginForm = (props) => {
  const {
    handleChange,
    handleFocus,
    handleBlur,
    login,
    forgot,
    requestOTP,
    inputs,
    errors,
    errorMsg,
    loading,
    checked,
    setErrors,
  } = props;
  const remember = sessionStorage.getItem(Constants.REMEMBER_ME);
  const u_name = sessionStorage.getItem(Constants.U_NAME);
  const u_pass = sessionStorage.getItem(Constants.U_PASS);

  const inputRef = useRef(null);

  const [value, setValue] = React.useState(0);
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyDown = (e) => {
    let keys = ["", "@", "e", "E", "+", "-", "."];
    if (keys.includes(e.key)) {
      e.preventDefault();
    }
    if (e.key === "Enter") {
      inputRef.current.focus();
      if (e.target.value.length < 10) {
        setErrors({
          ...errors,
          ["username"]: "Please enter valid mobile number",
        });
      }
    }
    
  };



  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      login(e);
    }
  };
  return(
    <>
    <div className="auth-form-space pd-t-16">
      <div className="auth-form-header">
        <h3 className="auth-title">Welcome To 'Live Order'</h3>
        <h5 className="auth-subtitle">
          India's Fastest Growing B2B Pharma 'Eco System'
        </h5>
      </div>
     
      <TextField
        autoFocus
        error={errors.username}
        autoComplete="off"
        name="username"
        margin="normal"
        variant="outlined"
        placeholder="Mobile Number"
        className="auth-input"
        value={inputs.username}
        onChange={(e) => handleChange(e)}
        onFocus={(e) => handleFocus(e)}
        onBlur={(e) => handleBlur(e)}
        helperText={errors.username}
        onKeyDown={(e) => handleKeyDown(e)}

        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={smartphone} alt="smartphone" />
            </InputAdornment>
          ),
          inputmode: "numeric",
          pattern: "^[0-9]*$",
          type: "number",
        }}
      />
      <TextField
        inputRef={inputRef}
        error={errors.password}
        helperText="Password should contain 4 - 16 characters,should contain alphanumeric & special characters"
        autoComplete="off"
        name="password"
        margin="normal"
        variant="outlined"
        placeholder="Password"
        className="auth-input mr-b-16"
        type={showPassword ? "text" : "password"}
        value={inputs.password}
        onChange={(e) => handleChange(e)}
        onFocus={(e) => handleFocus(e)}
        onBlur={(e) => handleBlur(e)}
        onPaste={(e) => e.preventDefault()}
        onCopy={(e) => e.preventDefault()}
        onKeyDown={handleEnter}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={password} alt="password" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {showPassword ? (
                <img
                  src={eyeOff}
                  className="eye_pointer"
                  alt="password"
                  onClick={handlePassword}
                />
              ) : (
                <img
                  src={eye}
                  className="eye_pointer"
                  alt="password"
                  onClick={handlePassword}
                />
              )}
              <InputAdornment
                position="end"
                onClick={() => forgot(1)}
                className="web-forgot-link"
              >
                {"Forgot?"}
              </InputAdornment>
            </InputAdornment>
          ),
        }}
      />
      <div>
        <div className="loginwithotp width-100 relative mr-b-16">
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                name="rememberme"
                color="primary"
              />
            }
            label="Remember me"
          />
          <div className="n-btn">
            <p className="cursor" onClick={() => requestOTP(2)}>
              Request OTP
            </p>
          </div>
        </div>
      </div>

      <Button
        variant="contained"
        color="primary"
        className="theme-btn default-width fixed-space"
        disabled={loading}
        type="submit"
        onClick={(e) => login(e)}
      >
        {loading ? <CircularProgress className="spining-icon" /> : null} Sign in
      </Button>
      <h5 className="static-links">
        <Link to="/terms">Terms &amp; Conditions</Link>
      </h5>
    </div>
    </>
   )

 }
 export default LoginForm;