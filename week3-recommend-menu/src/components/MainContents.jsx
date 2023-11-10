import styled from "styled-components";
import ContentsHeader from "./ContentsHeader";
import { useEffect, useState } from "react";
import SelectMethodMenu from "./step/SelectMethodMenu";
import SelectCountryMenu from "./step/SelectCountryMenu";
import SelectStepBtn from "./common/SelectStepBtn";
import SelectTypeMenu from "./step/SelectTypeMenu";
import SelectIsSpicyMenu from "./step/SelectIsSpicyMenu";

const MainContents = () => {
  const SELECTED_MENU = {
    method: "",
    country: "",
    type: "",
    isRed: "",
  };

  const [selectedMenu, setSelectedMenu] = useState(SELECTED_MENU);
  const [step, setStep] = useState(0);

  const renderContentsHeader = () => {
    switch (step) {
      case 0:
        return <ContentsHeader title={"원하는 추천 방식을 골라줘!"} />;
      case 1:
        return <ContentsHeader title={"오늘은 어떤 종류를 먹고 싶어?"} />;
      case 2:
        return <ContentsHeader title={"그럼 이 중에는 뭐가 끌려?"} />;
      case 3:
        return <ContentsHeader title={"마지막으로 골라줘!"} />;
    }
  };

  const renderContentsMenu = () => {
    switch (step) {
      case 0:
        return (
          <SelectMethodMenu
            step={step}
            setStep={setStep}
            setSelectedMenu={setSelectedMenu}
          />
        );

      case 1:
        return (
          <MianContentsBodyWrapper>
            <SelectMenuBtnWrapper>
              <SelectCountryMenu setSelectedMenu={setSelectedMenu} />
            </SelectMenuBtnWrapper>

            <StepBtnWrapper>
              <SelectStepBtn innerTxt={"이전으로"} setStep={setStep} />
              <SelectStepBtn innerTxt={"다음으로"} setStep={setStep} />
            </StepBtnWrapper>
          </MianContentsBodyWrapper>
        );

      case 2:
        return (
          <MianContentsBodyWrapper>
            <SelectMenuBtnWrapper>
              <SelectTypeMenu setSelectedMenu={setSelectedMenu} />
            </SelectMenuBtnWrapper>

            <StepBtnWrapper>
              <SelectStepBtn innerTxt={"이전으로"} setStep={setStep} />
              <SelectStepBtn innerTxt={"다음으로"} setStep={setStep} />
            </StepBtnWrapper>
          </MianContentsBodyWrapper>
        );

      case 3:
        return (
          <MianContentsBodyWrapper>
            <SelectMenuBtnWrapper>
              <SelectIsSpicyMenu setSelectedMenu={setSelectedMenu} />
            </SelectMenuBtnWrapper>

            <StepBtnWrapper>
              <SelectStepBtn innerTxt={"이전으로"} setStep={setStep} />
              <SelectStepBtn innerTxt={"결과보기"} setStep={setStep} />
            </StepBtnWrapper>
          </MianContentsBodyWrapper>
        );
    }
  };

  return (
    <MainContentsWrapper>
      {renderContentsHeader()}
      {renderContentsMenu()}
    </MainContentsWrapper>
  );
};

export default MainContents;

const MainContentsWrapper = styled.section`
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
`;

const MianContentsBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80%;
  gap: 1.5rem;
`;

const StepBtnWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1.5rem;
`;

const SelectMenuBtnWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  width: 100%;
  height: 80%;
`;
