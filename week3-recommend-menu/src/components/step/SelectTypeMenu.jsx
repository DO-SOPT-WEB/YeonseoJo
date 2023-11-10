import { useState } from "react";
import SelectMenuBtn from "../common/SelectMenuBtn";
import SelectStepBtn from "../common/SelectStepBtn";
import styled from "styled-components";

const SelectTypeMenu = ({ selectedMenu, setSelectedMenu, setStep }) => {
  const TYPE_MENUS = [
    { type: "rice", title: "밥" },
    { type: "noodle", title: "면" },
    { type: "etc", title: "기타" },
  ];

  const [selectedType, setSelectedType] = useState(selectedMenu.type);

  const handleSelectType = (type) => {
    setSelectedType(type);
    setSelectedMenu((prev) => {
      return { ...prev, type: type };
    });
  };

  return (
    <MianContentsBodyWrapper>
      <SelectMenuBtnWrapper>
        {TYPE_MENUS.map(({ type, title }) => {
          return (
            <SelectMenuBtn
              key={type}
              innerTxt={title}
              isSelected={selectedType === type}
              onClick={() => handleSelectType(type)}
            />
          );
        })}
      </SelectMenuBtnWrapper>

      <StepBtnWrapper>
        <SelectStepBtn innerTxt={"이전으로"} setStep={setStep} />
        <SelectStepBtn
          isDisabled={selectedType ? false : true}
          innerTxt={"다음으로"}
          setStep={setStep}
        />
      </StepBtnWrapper>
    </MianContentsBodyWrapper>
  );
};

export default SelectTypeMenu;

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
