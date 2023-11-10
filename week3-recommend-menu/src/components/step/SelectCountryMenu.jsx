import { useState } from "react";
import SelectMenuBtn from "../common/SelectMenuBtn";
import SelectStepBtn from "../common/SelectStepBtn";
import styled from "styled-components";

const SelectCountryMenu = ({ setSelectedMenu, setStep }) => {
  const COUNTRY_MENUS = [
    { country: "Korea", title: "한식" },
    { country: "China", title: "중식" },
    { country: "Japan", title: "일식" },
  ];

  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setSelectedMenu((...prev) => {
      return { ...prev, country: selectedCountry };
    });
  };

  return (
    <MianContentsBodyWrapper>
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
        <SelectStepBtn innerTxt={"결과보기"} setStep={setStep} />
      </StepBtnWrapper>
    </MianContentsBodyWrapper>
  );
};

export default SelectCountryMenu;

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
