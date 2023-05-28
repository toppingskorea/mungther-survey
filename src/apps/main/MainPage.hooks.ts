import { useShareLink, useWebShareApi } from "@/hooks";
import { useSubmitModal } from "./components/modals/SubmitModal.hooks";

export const useCTAButton = () => {
  const { show } = useSubmitModal();
  const { onShareLink } = useShareLink();

  return {
    show,
    share: onShareLink,
  };
};
