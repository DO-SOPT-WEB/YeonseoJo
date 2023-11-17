import { api } from "../axios";

const postSignInMember = async (userInfo, setNavigateURL) => {
  const { userId, password } = userInfo;
  const signinReqBody = { username: userId, password: password };

  try {
    const { data } = await api.post("/members/sign-in", signinReqBody);
    const { id } = data;
    setNavigateURL(`mypage/${id}`);
  } catch {
    (err) => console.log(err);
  }
};

export default postSignInMember;
