import styled from "styled-components";
import ContentsHeader from "./ContentsHeader";
import { useState } from "react";

const MainContents = () => {
  const SELECTED_MENU = {
    method: "",
    country: "",
    type: "",
    isRed: "",
  };

  const [selectedMenu, setSelectedMenu] = useState(SELECTED_MENU);
  const [step, setStep] = useState(0);

  return (
    <MainContentsWrapper>
      <ContentsHeader title={"제목 제목 제목"} />
    </MainContentsWrapper>
  );
};

export default MainContents;

const MainContentsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  height: 30rem;
  padding: 1.5rem 0;
  gap: 1.5rem;

  margin: auto;

  background-color: ${({ theme }) => theme.colors.mainColor};

  border-radius: 1rem;
`;
