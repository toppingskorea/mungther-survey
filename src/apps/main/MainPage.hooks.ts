import { useShareLink } from "@/hooks";
import GA from "react-ga4";
import { useSubmitModal } from "./components/modals/SubmitModal.hooks";

export const useCTAButton = () => {
  const { handleCreateFriendButtonClick } = useCreateFriendButton();
  const { onShareLink } = useShareLink();

  return {
    handleCreateFriendButtonClick,
    share: onShareLink,
  };
};

const useCreateFriendButton = () => {
  const { show } = useSubmitModal();

  const handleCreateFriendButtonClick = () => {
    show();
    GA.ga?.("send", "event", "click_event", "create_ friend_open_modal");
  };

  return {
    handleCreateFriendButtonClick,
  };
};
