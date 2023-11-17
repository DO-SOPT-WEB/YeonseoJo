import { api } from "../axios";

const getMemberCheck = async (username, setIsExist) => {
  try {
    const { data } = await api.get(`/members/check?username=${username}`);
    setIsExist(data.isExist);
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

export default getMemberCheck;
