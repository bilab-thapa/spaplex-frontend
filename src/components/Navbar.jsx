import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: #ff69b4;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 16px;
  color: white;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left/>
        <Center>
          <Logo><Link style={{textDecoration:'none',color:'white',  fontSize: 30 }} to = '/'>SPAPLEX</Link></Logo>
        </Center>
        <Right>
          <Link style={{textDecoration: 'none'}}  to = '/register'><MenuItem>REGISTER</MenuItem></Link>
          <Link style={{textDecoration: 'none'}}  to ='/login'><MenuItem>SIGN IN</MenuItem></Link> 
          {/* <Link style={{textDecoration: 'none'}}  onClick={Logout}><MenuItem>LOG OUT</MenuItem></Link>} */}
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
