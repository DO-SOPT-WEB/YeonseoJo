import { useState } from "react";
import styled from "styled-components";
import SelectMenuBtn from "../common/SelectMenuBtn";
import SelectStepBtn from "../common/SelectStepBtn";

const SelectMethodMenu = ({ selectedMenu, setStep, setSelectedMenu }) => {
  const METHOD_MENUS = [
    {
      type: "optional",
      title: "취향대로 추천",
    },
    { type: "randomize", title: "랜덤 추천" },
  ];

  const [selectedMethod, setSelectedMethod] = useState(selectedMenu.method);

  const handleSelectMethod = (type) => {
    setSelectedMethod(type);
    setSelectedMenu((prev) => {
      return { ...prev, method: type };
    });
  };

  const renderSelectedMethod = () => {
    return (
      <MianContentsBodyWrapper>
        <SelectedMethodBox>
          {selectedMethod === "optional" ? "취향대로 추천" : "랜덤으로 추천"}
        </SelectedMethodBox>
        <SelectStepBtn
          innerTxt={"START!"}
          selectedMethod={selectedMethod}
          setStep={setStep}
        />
      </MianContentsBodyWrapper>
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
              onClick={() => handleSelectMethod(type)}
            />
          );
        })}
      </SelectMenuBtnWrapper>
    );
  };

  return selectedMethod ? renderSelectedMethod() : renderMethodBtns();
};

export default SelectMethodMenu;

const MianContentsBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80%;
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

const SelectedMethodBox = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60%;
  height: 18rem;

  color: ${({ theme }) => theme.colors.pointColor};
  background-color: ${({ theme }) => theme.colors.bgColor};

  font-size: 2rem;

  border-radius: 1rem;
`;
