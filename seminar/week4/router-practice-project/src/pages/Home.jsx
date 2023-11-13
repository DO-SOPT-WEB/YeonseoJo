import styled from "styled-components";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Header />
      <main>
        {/* <p>게시물 리스트 보러 고고!</p> */}
        <MoveButton to="/post">게시물 리스트 보러 고고!</MoveButton>
      </main>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  & > main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600px;
  }
`;

const MoveButton = styled(Link)`
  background-color: black;
  color: white;

  border-radius: 7px;

  padding: 10px 15px;
  font-size: 30px;

  text-decoration: none;

  &:hover {
    background-color: white;
    color: purple;

    border: 2px solid black;
  }
`;
