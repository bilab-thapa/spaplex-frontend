import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: #fff0f5;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SPAPLEX INC.</Logo>
        <Desc>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. A iaculis at erat pellentesque. Ac odio tempor orci dapibus. 
        Nibh praesent tristique magna sit. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. 
        Et odio pellentesque diam volutpat commodo. Imperdiet proin fermentum leo vel. Augue mauris
        augue neque gravida in fermentum. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. 
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem><Link style={{textDecoration: 'none', color: "black"}} to = '/'>Home</Link></ListItem>
          <ListItem><Link style={{textDecoration: 'none', color: "black"}} to = '/'>My Account</Link></ListItem>
          <ListItem><Link style={{textDecoration: 'none', color: "black"}} to = '/'>Order Tracking</Link></ListItem>
          <ListItem><Link style={{textDecoration: 'none', color: "black"}} to = '/'>Wishlist</Link></ListItem>
          <ListItem><Link style={{textDecoration: 'none', color: "black"}} to = '/'>Terms and Conditions</Link></ListItem>
          
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Kalopul, Kathmandu
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +977 9861062587
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> customerservice@spaplex.com
        </ContactItem>
        
      </Right>
    </Container>
  );
};

export default Footer;
