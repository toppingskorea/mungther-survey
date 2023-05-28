import axios from "axios";

export const getUserCount = async () => {
  const { data } = await axios.get<{
    userCount: number;
  }>("/api/");

  return data.userCount;
};
