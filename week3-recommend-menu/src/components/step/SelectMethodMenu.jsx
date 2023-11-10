import { useState } from "react";
import styled from "styled-components";
import SelectMenuBtn from "../common/SelectMenuBtn";
import SelectStepBtn from "../common/SelectStepBtn";

const SelectMethodMenu = ({ step, setStep, setSelectedMenu }) => {
  const METHOD_MENUS = [
    {
      type: "opitonal",
      title: "취향대로 추천",
    },
    { type: "randomize", title: "랜덤 추천" },
  ];

  const [selectedMethod, setSelectedMethod] = useState("");

  const handleSelectBtn = (type) => {
    setSelectedMethod(type);
    setSelectedMenu((...prev) => {
      return { ...prev, method: selectedMethod };
    });
  };

  const renderSelectedMethod = () => {
    return (
      <MainContentsWrapper>
        <SelectedMethodBox>
          {selectedMethod === "optional" ? "취향대로 추천" : "랜덤으로 추천"}
        </SelectedMethodBox>
        <SelectStepBtn innerTxt={"Start!"} setStep={setStep} />
      </MainContentsWrapper>
    );
  };

  const renderMethodBtns = () => {
    return (
      <SelectMenuBtnWrapper>
        {METHOD_MENUS.map(({ type, title }) => {
          return (
            <SelectMenuBtn
              key={type}
              isBig={true}
              innerTxt={title}
              isSelected={selectedMethod === type}
              onClick={() => handleSelectBtn(type)}
            />
          );
        })}
      </SelectMenuBtnWrapper>
    );
  };

  return selectedMethod ? renderSelectedMethod() : renderMethodBtns();
};

export default SelectMethodMenu;

const SelectMenuBtnWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  width: 100%;
  height: 80%;
`;

const SelectedMethodBox = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70%;
  height: 18rem;

  color: ${({ theme }) => theme.colors.pointColor};
  background-color: ${({ theme }) => theme.colors.bgColor};

  border-radius: 1rem;
`;

const MainContentsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  height: 80%;
  padding: 1.5rem 0;
  gap: 1.5rem;

  margin: auto;

  background-color: ${({ theme }) => theme.colors.mainColor};

  border-radius: 1rem;
`;
