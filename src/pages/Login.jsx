import * as React from 'react';
import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url("https://res.cloudinary.com/bilabthapa/image/upload/v1658830504/progulf/rick-gebhardt-n52K1_3aZDE-unsplash_iq07xl.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: teal;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: teal;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: white ;
  color: black;
  cursor: pointer;
  margin-bottom: 20px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;




const Login = (details) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  // toast.configure()
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    // toast("Wow so easy!");
  };
 
  return (
    <>
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled = {isFetching}>
            LOGIN
          </Button>
          <Link style={{textDecoration: 'none',color : 'white'}}  to = '/register'>CREATE A NEW ACCOUNT</Link>
        </Form>

      </Wrapper>
      {/* <ToastContainer/> */}
    </Container>
 
    </>
  );
};

export default Login;
