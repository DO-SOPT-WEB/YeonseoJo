import { useEffect, useState } from "react";
import styled from "styled-components";
import SelectMenuBtn from "../common/SelectMenuBtn";
import SelectStepBtn from "../common/SelectStepBtn";
import { METHOD_MENUS } from "../../assets/data/MENU_CATEGORY";

const SelectMethodMenu = ({ selectedMenu, setStep, setSelectedMenu }) => {
  //STEP 0 : 메뉴 선택 방식(method) 선택 단계
  // 이미 선택한 방식이 있다면, 불러올수 있도록 useState의 초기화 값으로 활용
  const [selectedMethod, setSelectedMethod] = useState(selectedMenu.method);

  const handleSelectMethod = (type) => {
    setSelectedMethod(type);
    setSelectedMenu((prev) => {
      return { ...prev, method: type };
    });
  };

  // 방식 선택 버튼들을 렌더링하는 함수
  const renderSelectedMethod = () => {
    return (
      <MianContentsBodyWrapper>
        <SelectedMethodBox>
          {selectedMethod === "optional" ? "취향대로 추천" : "랜덤으로 추천"}
        </SelectedMethodBox>
        <SelectStepBtn
          innerTxt={"START!"}
          selectedMethod={selectedMethod}
          setStep={setStep}
        />
      </MianContentsBodyWrapper>
    );
  };

  // 이미 선택한 방식이 있는 경우, 선택한 방식이 무엇인지 보여주는 화면을 렌더링 하는 함수
  const renderMethodBtns = () => {
    return (
      <SelectMenuBtnWrapper>
        {METHOD_MENUS.map(({ type, title }) => {
          return (
            <SelectMenuBtn
              key={type}
              isBig={true}
              innerTxt={title}
              onClick={() => handleSelectMethod(type)}
            />
          );
        })}
      </SelectMenuBtnWrapper>
    );
  };

  // 처음으로 버튼 시 컴포넌트 리로드해서 반영되도록
  useEffect(() => {
    setSelectedMethod(selectedMenu.method);
  }, [setSelectedMenu, selectedMenu]);

  return selectedMethod ? renderSelectedMethod() : renderMethodBtns();
};

export default SelectMethodMenu;

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

const SelectedMethodBox = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60%;
  height: 18rem;

  color: ${({ theme }) => theme.colors.pointColor};
  background-color: ${({ theme }) => theme.colors.bgColor};

  font-size: 2rem;

  border-radius: 1rem;
`;
