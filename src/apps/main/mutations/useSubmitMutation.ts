import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useSubmitModalStore } from "../stores/submitModal.store";
import { makeSubmit } from "../apis/submit";
import { useGoogleAnalytics } from "@/hooks";
import { alreadySubmit } from "../components/modals/SubmitModal.hooks";

export const useSubmitMutation = () => {
  const toast = useToast();
  const onClose = useSubmitModalStore((state) => state.onClose);
  const { sendClickEventToGoogleAnalytics } = useGoogleAnalytics();

  return useMutation(makeSubmit, {
    onSuccess: () => {
      onClose();
      sendClickEventToGoogleAnalytics({
        eventName: "modal_submit_button_click",
      });
      toast({
        title: "신청이 접수 되었어요.",
        description: "빠른 시일내에 멍더로 찾아올게요.",
        status: "success",
        duration: 2000,
        containerStyle: {
          width: "96vw",
        },
        isClosable: true,
      });
      alreadySubmit.set(true);
    },
  });
};
