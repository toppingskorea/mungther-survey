import { useGoogleAnalytics, useShareLink } from "@/hooks";

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
  const { sendClickEventToGoogleAnalytics } = useGoogleAnalytics();

  const handleCreateFriendButtonClick = () => {
    show();
    sendClickEventToGoogleAnalytics({ eventName: "create_friend_open_modal" });
  };

  return {
    handleCreateFriendButtonClick,
  };
};
