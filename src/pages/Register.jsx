import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { register } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://res.cloudinary.com/bilabthapa/image/upload/v1658828840/progulf/mig_opebmm.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  color: white;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: white;
  color: black;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault(); //prevent reload
    register(dispatch, { username, password, email });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="username"  onChange={(e) => setUsername(e.target.value)}/>
          <Input placeholder="password"  type="password" onChange={(e) => setPassword(e.target.value)}/>
          <Input placeholder="email"  onChange={(e) => setEmail(e.target.value)}/>

        
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>
           
            CREATE ACCOUNT
   
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
