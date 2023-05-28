import { useGetUserCountQuery } from "../../queries/useGetUserCountQuery";

export const useCount = () => {
  const { data: userCount } = useGetUserCountQuery();

  return {
    userCount: String(userCount),
  };
};
