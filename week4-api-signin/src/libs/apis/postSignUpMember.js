import { api } from "../axios";

const postSignUpMember = async (username, password, nickname) => {
  const signupReqBody = {
    username: username,
    password: password,
    nickname: nickname,
  };
  try {
    const { status } = await api.post("/members", signupReqBody);
    return status;
    // console.log(status);
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

export default postSignUpMember;
