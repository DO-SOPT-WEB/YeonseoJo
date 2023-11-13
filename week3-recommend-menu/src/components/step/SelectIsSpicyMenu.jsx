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
  // STEP 3 : 메뉴의 맵기(빨간거 하얀거 : isSpicy)를 선택하는 단계
  // 이미 선택한 맵기 옵션이 있다면, 불러올수 있도록 useState의 초기화 값으로 활용
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
