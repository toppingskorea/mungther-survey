import { useShareLink } from "@/hooks";

export const useCTAButton = () => {
  const { onShareLink } = useShareLink();

  return {
    onShareLink,
  };
};
