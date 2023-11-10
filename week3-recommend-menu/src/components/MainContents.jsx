import styled from "styled-components";
import ContentsHeader from "./ContentsHeader";
import { useState } from "react";
import SelectMethodMenu from "./step/SelectMethodMenu";
import SelectCountryMenu from "./step/SelectCountryMenu";
import SelectTypeMenu from "./step/SelectTypeMenu";
import SelectIsSpicyMenu from "./step/SelectIsSpicyMenu";

const MainContents = () => {
  const SELECTED_MENU = {
    method: "",
    country: "",
    type: "",
    isSpicy: null,
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
      case 4:
        return <ContentsHeader title={"오늘의 추천 음식은 바로!"} />;
    }
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
            setStep={setStep}
          />
        );

      case 2:
        return (
          <SelectTypeMenu
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            setStep={setStep}
          />
        );

      case 3:
        return (
          <SelectIsSpicyMenu
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
