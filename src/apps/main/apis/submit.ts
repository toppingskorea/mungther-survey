import axios from "axios";

export const makeSubmit = async ({
  email,
  agreement,
}: {
  email: string;
  agreement: "Y" | "N";
}) => {
  const result = await axios.post("/api/new", {
    email,
    agreement,
  });

  console.log(result);

  return true;
};
