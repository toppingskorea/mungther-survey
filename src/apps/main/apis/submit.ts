import axios from "axios";

export const makeSubmit = async ({
  email,
  agreement,
}: {
  email: string;
  agreement: "Y" | "N";
}) => {
  await axios.post("/new", {
    email,
    agreement,
  });

  return true;
};
