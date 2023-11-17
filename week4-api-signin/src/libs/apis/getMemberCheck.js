import { api } from "../axios";

const getMemberCheck = (username, setIsExist) => {
  const fetchData = async () => {
    try {
      const { data } = await api.get(`/members/check?username=${username}`);
      setIsExist(data.isExist);
    } catch {
      (err) => {
        console.log(err);
      };
    }
  };

  fetchData();
};

export default getMemberCheck;
