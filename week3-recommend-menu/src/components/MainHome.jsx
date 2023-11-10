import { useState } from "react";
import styled from "styled-components";
import SelectMenuBtn from "./common/SelectMenuBtn";

const MainHome = () => {
  const METHOD_MENUS = [
    {
      type: "opitonal",
      title: "취향대로 추천",
    },
    { type: "randomize", title: "랜덤 추천" },
  ];

  const [selectMenu, setSelectMenu] = useState("");

  const handleSelectBtn = (type) => {
    console.log(selectMenu);
    setSelectMenu(type);
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
          {METHOD_MENUS.map(({ type, title }) => {
            return (
              <SelectMenuBtn
                key={type}
                isBig={true}
                innerTxt={title}
                isSelected={selectMenu === type}
                onClick={() => handleSelectBtn(type)}
              />
            );
          })}
        </St.SelectMenuBtnWrapper>

        <St.ResetBtn>이전으로</St.ResetBtn>
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
    align-items: center;
    gap: 1.5rem;

    width: 100%;
    height: 80%;
  `,

  // SelectMenuBtn: styled.button`
  //   width: 15%;
  //   height: 10rem;

  //   color: ${({ theme }) => theme.colors.hoverColor};
  //   background-color: ${({ theme }) => theme.colors.bgColor};

  //   font-size: 1.5rem;

  //   border: 0.1rem solid ${({ theme }) => theme.colors.borderColor};
  //   border-radius: 1rem;

  //   &:hover {
  //     border: 0.2rem solid ${({ theme }) => theme.colors.pointColor};
  //   }

  //   ${({ $isClicked }) =>
  //     $isClicked
  //       ? css`
  //           color: ${({ theme }) => theme.colors.bgColor};
  //           background-color: ${({ theme }) => theme.colors.pointColor};
  //           border: none;
  //         `
  //       : css`
  //           color: ${({ theme }) => theme.colors.hoverColor};
  //           background-color: ${({ theme }) => theme.colors.bgColor};
  //         `};
  // `,

  SelectStepBtnWrapper: styled.article`
    display: flex;
    height: 20%;
  `,
};
