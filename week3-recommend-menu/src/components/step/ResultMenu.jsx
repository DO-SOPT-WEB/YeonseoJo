import styled from "styled-components";
import SelectStepBtn from "../common/SelectStepBtn";
import { MENU_ITMES } from "../../assets/data/MENU_ITEMS";
import { useState } from "react";
import CountDown from "./CountDown";

const ResultMenu = ({ selectedMenu, setSelectedMenu, setStep }) => {
  // STEP 4 : 메뉴 선택 결과를 보여주는 컴포넌트

  // 카운트다운 타이머의 초 수를 상수로 지정
  const RANDOME_TIME = 3;

  const [count, setCount] = useState(RANDOME_TIME);

  const {
    method,
    country: selectedCountry,
    type: selectedType,
    isSpicy: selectedIsSpicy,
  } = selectedMenu;

  // 취향대로 선택한 로직에서 -> 선택된 결과 메뉴 filter하기
  const targetMenu = MENU_ITMES.filter(({ country, type, isSpicy }) => {
    return (
      country === selectedCountry &&
      type === selectedType &&
      isSpicy === selectedIsSpicy
    );
  })[0];

  // 랜덥 로직에서 -> 랜덤 선택된 메뉴 저장
  const randomMenu = MENU_ITMES.sort(() => Math.random() - 0.5)[0];

  // 로직에 따라, 결정된 메뉴에서 화면 렌더링 시 필요한 이미지, 제목을 구조분해 할당으로 불러오기
  const { imgSrc, title } = method === "randomize" ? randomMenu : targetMenu;

  return (
    <>
      {/* 타이머 조건부 렌더링 : (1) 타이머 초 수가 0초 초과일때 && (2) 랜덤 선택 방식일 때만 */}
      {count > 0 && method === "randomize" ? (
        <CountDown count={count} setCount={setCount} />
      ) : (
        <MianContentsBodyWrapper>
          <ResultContentsWrapper>
            <ResultImg src={imgSrc} alt={title} />
            <ResultTitleContaianer>
              <h3>{title}</h3>
            </ResultTitleContaianer>
          </ResultContentsWrapper>

          <StepBtnWrapper>
            <SelectStepBtn
              setSelectedMenu={setSelectedMenu}
              innerTxt={"다시하기"}
              setStep={setStep}
            />
          </StepBtnWrapper>
        </MianContentsBodyWrapper>
      )}
    </>
  );
};

export default ResultMenu;

const MianContentsBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80%;
  gap: 1.5rem;
`;

const ResultContentsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  width: 100%;
  height: 80%;
`;
const ResultImg = styled.img`
  width: 13rem;
  height: 12rem;
`;

const ResultTitleContaianer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 2rem;

  background-color: ${({ theme }) => theme.colors.bgColor};

  border: 0.1rem ${({ theme }) => theme.colors.pointColor};
  border-style: dashed none dashed none;

  font-size: 1.7rem;
`;

const StepBtnWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1.5rem;
`;
