import { combineReducers } from "redux";
import LoginReducer from "./common/reducer/login/loginReducer";
const RootReducer = combineReducers({
    login: LoginReducer
})
export default RootReducer;
