import { api } from "../axios";

const postSignInMember = async (userInfo, navigate, setErrMsg) => {
  const { userId: username, password } = userInfo;
  const signinReqBody = { username: username, password: password };

  try {
    const { data } = await api.post("/members/sign-in", signinReqBody);
    const { id } = data;
    id && navigate(`/mypage/${id}`);
  } catch (err) {
    setErrMsg(err.response.data.message);
  }
};

export default postSignInMember;
