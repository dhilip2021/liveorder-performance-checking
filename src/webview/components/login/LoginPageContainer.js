import LoginPage from "./LoginPage";
import "./css/LoginStyles.css";
// import { login, profileDetails, SendOTP, SendOTPLoading, validateREGISTER } from "../../../common/action";
import { connect } from "react-redux";



const mapStateToProps = (state) => ({
//   loginResult: state.login,
//   sendOTPResult: state.sendOTPResult,
//   profileDetailsResult: state.profileDetailsResult,
//   validateREGISTERResult: state.validateREGISTERResult,
});

const mapDispatchToProps = (dispatch) => ({
//   login: (inputs) => dispatch(login(inputs)),
//   profileDetails: () => dispatch(profileDetails()),
//   SendOTP: (inputs) => dispatch(SendOTP(inputs)),
//   SendOTPLoading: () => dispatch(SendOTPLoading()),
//   validateREGISTER: (inputs) => dispatch(validateREGISTER(inputs)),
});


const LoginPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
export default LoginPageContainer;
