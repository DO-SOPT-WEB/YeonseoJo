import styled from "styled-components";
import MainBody from "./MainContents";

const MainLayout = () => {
  return (
    <St.MainContainer>
      <St.MainHHeader>
        <St.HeaderTitle>🍱 오늘의 점메추 🍱</St.HeaderTitle>
        <St.ResetBtn type="button">돌아가기</St.ResetBtn>
      </St.MainHHeader>
      <MainBody />
    </St.MainContainer>
  );
};

export default MainLayout;

const St = {
  MainContainer: styled.main`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100dvh;

    background-color: ${({ theme }) => theme.colors.bgColor};
  `,

  MainHHeader: styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    width: 100%;
    height: 6rem;

    background-color: ${({ theme }) => theme.colors.mainColor};
  `,

  HeaderTitle: styled.h1`
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.bgColor};
  `,

  ResetBtn: styled.button`
    /* position: absolute;
    right: 0; */

    padding: 1rem;
    margin-right: 5rem;

    color: ${({ theme }) => theme.colors.pointColor};
    background-color: ${({ theme }) => theme.colors.bgColor};
    font-size: 1.5rem;

    border: 0.1rem solid #d8d9dd;
    border-radius: 0.5rem;

    &:hover {
      border: 0.1rem solid ${({ theme }) => theme.colors.pointColor};
    }
  `,

  // SelectStepBtnWrapper: styled.article`
  //   display: flex;
  //   height: 20%;
  // `,
};
