import styled from "styled-components";
import SelectStepBtn from "../common/SelectStepBtn";
import { MENU } from "../../assets/data/MENU";

const ResultMenu = ({ selectedMenu, setStep }) => {
  const {
    method,
    country: selectedCountry,
    type: selectedType,
    isSpicy: selectedIsSpicy,
  } = selectedMenu;

  console.log(selectedCountry, selectedType, selectedIsSpicy);

  const targetMenu = MENU.filter(({ country, type, isSpicy }) => {
    return (
      country === selectedCountry &&
      type === selectedType &&
      isSpicy === selectedIsSpicy
    );
  })[0];

  const randomMenu = MENU.sort(() => Math.random() - 0.5)[0];

  const { imgSrc, title } = method === "optional" ? targetMenu : randomMenu;

  return (
    <MianContentsBodyWrapper>
      <ResultContentsWrapper>
        <ResultImg src={imgSrc} alt={title} />
        <ResultTitleContaianer>
          <h3>{title}</h3>
        </ResultTitleContaianer>
      </ResultContentsWrapper>

      <StepBtnWrapper>
        <SelectStepBtn innerTxt={"다시하기"} setStep={setStep} />
      </StepBtnWrapper>
    </MianContentsBodyWrapper>
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
