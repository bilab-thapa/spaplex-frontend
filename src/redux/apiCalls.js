import { loginFailure, loginStart, loginSuccess, registerStart, registerFailure, registerSuccess } from "./userRedux";

import axios from "axios";


export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await axios.post("http://localhost:3001/api/auth/login", user)
    dispatch(loginSuccess(res.data))
    alert("Login Successful!")
    window.location.replace('/');
    const loggedIn = true;
    
  } catch (err) {
    dispatch(loginFailure());
    alert("Invalid Details!")
    console.log("failed")
    const loggedIn = false;
  
  }
};
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("http://localhost:3001/api/auth/register", user);
    dispatch(registerSuccess(res.data));
    alert("Register Successful!")
    window.location.replace('/login');
    
  } catch (err) {
    dispatch(registerFailure());
    alert("Invalid Details!")
  }
};
