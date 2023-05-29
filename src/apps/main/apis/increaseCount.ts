import axios from "axios";

export const increaseCount = async () => {
  await axios.post("/api/count");

  return true;
};
