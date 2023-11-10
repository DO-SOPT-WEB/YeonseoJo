import styled from "styled-components";
import SelectStepBtn from "../common/SelectStepBtn";
import { MENU_ITMES } from "../../assets/data/MENU_ITEMS";
import { useState } from "react";
import CountDown from "./CountDown";

const ResultMenu = ({ selectedMenu, setSelectedMenu, setStep }) => {
  const RANDOME_TIME = 3;

  const [count, setCount] = useState(RANDOME_TIME);

  const {
    method,
    country: selectedCountry,
    type: selectedType,
    isSpicy: selectedIsSpicy,
  } = selectedMenu;

  const targetMenu = MENU_ITMES.filter(({ country, type, isSpicy }) => {
    return (
      country === selectedCountry &&
      type === selectedType &&
      isSpicy === selectedIsSpicy
    );
  })[0];

  const randomMenu = MENU_ITMES.sort(() => Math.random() - 0.5)[0];

  const { imgSrc, title } = method === "randomize" ? randomMenu : targetMenu;

  return (
    <>
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
