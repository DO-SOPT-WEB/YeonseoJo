import React, { useState } from "react";
import styled from "styled-components";
import SelectMenuBtn from "../common/SelectMenuBtn";

const SelectMethod = () => {
  const METHOD_MENUS = [
    {
      type: "opitonal",
      title: "취향대로 추천",
    },
    { type: "randomize", title: "랜덤 추천" },
  ];

  const [selectedMethod, setSelectedMethod] = useState("");

  const handleSelectBtn = (type) => {
    console.log(selectedMethod);
    setSelectedMethod(type);
  };

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

export default SelectMethod;

const SelectMenuBtnWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  width: 100%;
  height: 80%;
`;
