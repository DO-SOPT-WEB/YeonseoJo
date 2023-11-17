import { useState } from "react";
import { api } from "../axios";

const useGetMemberInfo = (memberId) => {
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await api.get(`/members/${memberId}`);
      setResponse(data);
    } catch {
      (err) => setError(err);
    }
  };

  fetchData();

  return { response, error };
};

export default useGetMemberInfo;
