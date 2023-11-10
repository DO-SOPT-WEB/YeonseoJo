import styled from "styled-components";
import ContentsHeader from "./ContentsHeader";

import SelectMethodMenu from "./step/SelectMethodMenu";
import SelectCountryMenu from "./step/SelectCountryMenu";
import SelectTypeMenu from "./step/SelectTypeMenu";
import SelectIsSpicyMenu from "./step/SelectIsSpicyMenu";
import ResultMenu from "./step/ResultMenu";

const MainContents = ({
  selectedMenu,
  setSelectedMenu,
  step,
  setStep,
  maxStep,
}) => {
  const renderContentsHeader = () => {
    let title = "";
    switch (step) {
      case 0:
        title = "원하는 추천 방식을 골라줘";
        break;
      case 1:
        title = "오늘은 어떤 종류를 먹고 싶어?";
        break;
      case 2:
        title = "그럼 이 중에는 뭐가 끌려?";
        break;
      case 3:
        title = "마지막으로 골라줘!";
        break;
      case 4:
        title = "오늘의 추천 음식은 바로!";
        break;
    }

    return <ContentsHeader title={title} />;
  };

  const renderContentsMenu = () => {
    switch (step) {
      case 0:
        return (
          <SelectMethodMenu
            setStep={setStep}
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
        );

      case 1:
        return (
          <SelectCountryMenu
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            step={step}
            setStep={setStep}
            maxStep={maxStep}
          />
        );

      case 2:
        return (
          <SelectTypeMenu
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            step={step}
            setStep={setStep}
            maxStep={maxStep}
          />
        );

      case 3:
        return (
          <SelectIsSpicyMenu
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            step={step}
            setStep={setStep}
            maxStep={maxStep}
          />
        );

      case 4:
        return (
          <ResultMenu
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            setStep={setStep}
          />
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
