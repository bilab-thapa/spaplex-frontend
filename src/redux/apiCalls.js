import { loginFailure, loginStart, loginSuccess, registerStart, registerFailure, registerSuccess } from "./userRedux";

import axios from "axios";


export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await axios.post("http://localhost:3001/api/auth/login", user)
    // .then((response)=>{
    //   console.log(loginSuccess(res.data))
    //   if(response.data.token){  
    //     //It will store the token locallt, so that it is available all over the component
    //     localStorage.setItem("ticket",response.data.token);
    //     //redirect to the home
    //     <Link to ='/'></Link>
    //     window.location.replace('/')
    //     }else{
    //         console.log("Invalid credential!")
    //     }
    // })
    dispatch(loginSuccess(res.data))
    alert("Login Successful!")

    window.location.replace('/');
    
    
  } catch (err) {
    dispatch(loginFailure());
    alert("Invalid Details!")
    console.log("failed")
    // window.location.replace('/')
  
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
