import styled from "styled-components";
import PageLayout from "../components/PageLayout";
import ContentsHeader from "../components/common/ContentsHeader";

const SignUp = () => {
  const SIGNUP_INPUT_LIST = [
    {
      description: "ID",
      placeholder: "아이디를 입력해주세요.",
    },
    {
      description: "비밀번호",
      placeholder: "비밀번호를 입력해주세요.",
    },
    {
      description: "비밀번호 확인",
      placeholder: "비밀번호를 다시 한 번 입력해주세요.",
    },
    {
      description: "닉네임",
      placeholder: "닉네임을 입력해주세요.",
    },
  ];

  return (
    <PageLayout>
      <ContentsHeader title="Sign-Up" />

      {SIGNUP_INPUT_LIST.map(({ description, placeholder }) => {
        return (
          <St.SignUpInputContainer key={description}>
            <St.SignUpInputDescription>{description}</St.SignUpInputDescription>
            <St.SignUpInputBox>
              <St.SignUpInput placeholder={placeholder} />
              {description === "ID" && (
                <St.DuplicateCheckBtn type="button">
                  중복 체크
                </St.DuplicateCheckBtn>
              )}
            </St.SignUpInputBox>
          </St.SignUpInputContainer>
        );
      })}

      <St.SignUpBtn type="button">회원가입</St.SignUpBtn>
    </PageLayout>
  );
};

export default SignUp;

const St = {
  SignUpInputContainer: styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 0 3rem;
    gap: 1.5rem;
  `,

  SignUpInputDescription: styled.p`
    font-size: 1.3rem;
  `,

  SignUpInputBox: styled.div`
    display: flex;
    align-items: center;

    width: 17rem;
    gap: 1rem;
  `,

  SignUpInput: styled.input`
    min-width: 10rem;
    width: 17rem;
    height: 2.2rem;
    padding: 0 0.5rem;

    font-size: 1rem;

    &:focus {
      outline: none;
      border: 0.1rem solid ${({ theme }) => theme.colors.black};
      border-radius: 0.15rem;
    }
  `,

  DuplicateCheckBtn: styled.button`
    width: 6rem;
    height: 2.2rem;

    font-size: 0.9rem;

    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

    border-radius: 0.5rem;
  `,

  SignUpBtn: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: calc(100% - 6rem);
    height: 2.7rem;
    margin-top: 1rem;

    background-color: ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.white};

    font-size: 1.2rem;

    border-radius: 0.5rem;
  `,
};
