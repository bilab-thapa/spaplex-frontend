import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: pink;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>BEAUTY WITHIN US</Container>;
};

export default Announcement;
