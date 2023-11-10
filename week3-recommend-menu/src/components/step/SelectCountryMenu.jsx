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

const SelectCountryMenu = ({
  selectedMenu,
  setSelectedMenu,
  step,
  setStep,
  maxStep,
}) => {
  const COUNTRY_MENUS = [
    { country: "Korea", title: "한식" },
    { country: "China", title: "중식" },
    { country: "Japan", title: "일식" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(selectedMenu.country);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setSelectedMenu((prev) => {
      return { ...prev, country: country };
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
        {COUNTRY_MENUS.map(({ country, title }) => {
          return (
            <SelectMenuBtn
              key={country}
              innerTxt={title}
              isSelected={selectedCountry === country}
              onClick={() => handleSelectCountry(country)}
            />
          );
        })}
      </SelectMenuBtnWrapper>

      <StepBtnWrapper>
        <SelectStepBtn innerTxt={"이전으로"} setStep={setStep} />
        <SelectStepBtn
          isDisabled={selectedCountry ? false : true}
          innerTxt={"다음으로"}
          setStep={setStep}
        />
      </StepBtnWrapper>
    </MianContentsBodyWrapper>
  );
};

export default SelectCountryMenu;
