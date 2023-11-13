import styled from "styled-components";

// 공통 헤더
const Header = () => {
  return (
    <HeaderContainer>
      <h1>4차 세미나 실습</h1>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 70px;

  background-color: beige;

  & > h1 {
    font-size: 35px;
    font-weight: bold;
  }
`;
