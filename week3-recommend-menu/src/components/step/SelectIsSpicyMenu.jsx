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
import { IS_SPICY_MENUS } from "../../assets/data/MENU_CATEGORY";

const SelectIsSpicyMenu = ({
  selectedMenu,
  setSelectedMenu,
  step,
  setStep,
  maxStep,
}) => {
  const [selectedSpicy, setSelectedSpicy] = useState(selectedMenu.isSpicy);

  const handleSelectSpicy = (spicy) => {
    setSelectedSpicy(spicy);
    setSelectedMenu((prev) => {
      return { ...prev, isSpicy: spicy };
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
