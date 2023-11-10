import { useState } from "react";
import SelectMenuBtn from "../common/SelectMenuBtn";
import SelectStepBtn from "../common/SelectStepBtn";
import styled from "styled-components";

const SelectIsSpicyMenu = ({ selectedMenu, setSelectedMenu, setStep }) => {
  const IS_SPICY_MENUS = [
    { spicy: true, title: "빨간거" },
    { spicy: false, title: "하얀거" },
  ];

  const [selectedSpicy, setSelectedSpicy] = useState(selectedMenu.isSpicy);

  const handleSelectSpicy = (spicy) => {
    setSelectedSpicy(spicy);
    setSelectedMenu((prev) => {
      return { ...prev, spicy: spicy };
    });
  };

  return (
    <MianContentsBodyWrapper>
      <SelectMenuBtnWrapper>
        {IS_SPICY_MENUS.map(({ spicy, title }) => {
          return (
            <SelectMenuBtn
              key={title}
              innerTxt={title}
              isSelected={selectedSpicy === spicy}
              onClick={() => handleSelectSpicy(spicy)}
            />
          );
        })}
      </SelectMenuBtnWrapper>

      <StepBtnWrapper>
        <SelectStepBtn innerTxt={"이전으로"} setStep={setStep} />
        <SelectStepBtn
          isDisabled={selectedSpicy != null ? false : true}
          innerTxt={"결과보기"}
          setStep={setStep}
        />
      </StepBtnWrapper>
    </MianContentsBodyWrapper>
  );
};

export default SelectIsSpicyMenu;

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

const StepBtnWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1.5rem;
`;
