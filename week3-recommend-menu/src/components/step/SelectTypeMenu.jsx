import { useState } from "react";
import SelectMenuBtn from "../common/SelectMenuBtn";
import SelectStepBtn from "../common/SelectStepBtn";

import {
  CurrStepTag,
  CurrStepWrapper,
  MianContentsBodyWrapper,
  SelectMenuBtnWrapper,
  StepBtnWrapper,
} from "../../styles/common/CommonContentsStyle";

const SelectTypeMenu = ({
  selectedMenu,
  setSelectedMenu,
  step,
  setStep,
  maxStep,
}) => {
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
      <CurrStepWrapper>
        <CurrStepTag>
          {step} / {maxStep}
        </CurrStepTag>
      </CurrStepWrapper>

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
