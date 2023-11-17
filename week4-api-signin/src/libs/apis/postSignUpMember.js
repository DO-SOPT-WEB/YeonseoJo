import { api } from "../axios";

const postSignUpMember = async (username, password, nickname, isSuccess) => {
  const signupReqBody = {
    username: username,
    password: password,
    nickname: nickname,
  };
  try {
    await api.post("/members", signupReqBody);
    isSuccess = true;
    return isSuccess;
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

export default postSignUpMember;
