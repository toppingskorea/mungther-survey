import { useSuspenseQuery } from "@suspensive/react-query";
import { getUserCount } from "../apis/getUserCount";

export const GET_USER_COUNT_QUERY_KEY = "get-user-count";

export const useGetUserCountQuery = () => {
  return useSuspenseQuery([GET_USER_COUNT_QUERY_KEY], getUserCount);
};
