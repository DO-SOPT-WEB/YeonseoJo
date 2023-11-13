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
import { TYPE_MENUS } from "../../assets/data/MENU_CATEGORY";

const SelectTypeMenu = ({
  selectedMenu,
  setSelectedMenu,
  step,
  setStep,
  maxStep,
}) => {
  //STEP 2 : 메뉴의 유형(Type) 선택 단계
  // 이미 선택한 유형이 있다면, 불러올수 있도록 useState의 초기화 값으로 활용
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
