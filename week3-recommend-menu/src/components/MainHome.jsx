import { useState } from "react";
import styled, { css } from "styled-components";

const MainHome = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickBtn = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <St.MainContainer>
      <St.MainHHeader>
        <St.HeaderTitle>🍱 오늘의 점메추 🍱</St.HeaderTitle>
        <St.ResetBtn type="button">돌아가기</St.ResetBtn>
      </St.MainHHeader>
      <St.MainContentsWrapper>
        <St.MainContentsHeader>
          <h2>제목 제목 제목</h2>
        </St.MainContentsHeader>
        <St.SelectMenuBtnWrapper>
          <St.SelectMenuBtn onClick={handleClickBtn} $isClicked={isClicked}>
            취향대로 선택
          </St.SelectMenuBtn>
          <St.SelectMenuBtn>랜덤 선택</St.SelectMenuBtn>
        </St.SelectMenuBtnWrapper>
      </St.MainContentsWrapper>
    </St.MainContainer>
  );
};

export default MainHome;

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
    position: absolute;
    right: 0;

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

  MainContentsWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;
    height: 30rem;
    padding: 1.5rem 0;
    gap: 1.5rem;

    margin: auto;

    background-color: ${({ theme }) => theme.colors.mainColor};

    border-radius: 1rem;
  `,

  MainContentsHeader: styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 60%;
    height: 3.5rem;

    color: ${({ theme }) => theme.colors.pointColor};
    background-color: ${({ theme }) => theme.colors.bgColor};

    font-size: 1.5rem;

    border-radius: 0.5rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.pointColor};
  `,

  SelectMenuBtnWrapper: styled.article`
    display: flex;
    justify-content: center;
    gap: 1.5rem;

    width: 100%;
  `,

  SelectMenuBtn: styled.button`
    width: 30%;
    height: 18rem;

    color: ${({ theme }) => theme.colors.hoverColor};
    background-color: ${({ theme }) => theme.colors.bgColor};

    font-size: 2.3rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 1rem;

    &:hover {
      border: 0.2rem solid ${({ theme }) => theme.colors.pointColor};
    }

    ${({ $isClicked }) =>
      $isClicked
        ? css`
            color: ${({ theme }) => theme.colors.bgColor};
            background-color: ${({ theme }) => theme.colors.pointColor};
            border: none;
          `
        : css`
            color: ${({ theme }) => theme.colors.hoverColor};
            background-color: ${({ theme }) => theme.colors.bgColor};
          `};
  `,
};
