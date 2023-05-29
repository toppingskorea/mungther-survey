import { useGoogleAnalytics } from "@/hooks";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { increaseCount } from "../apis/increaseCount";
import { alreadySubmit } from "../components/modals/SubmitModal.hooks";
import { useSubmitModalStore } from "../stores/submitModal.store";
import { GET_USER_COUNT_QUERY_KEY } from "../queries/useGetUserCountQuery";

export const useIncreaseCount = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const onClose = useSubmitModalStore((state) => state.onClose);
  const { sendClickEventToGoogleAnalytics } = useGoogleAnalytics();

  return useMutation(increaseCount, {
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
      queryClient.invalidateQueries({
        queryKey: [GET_USER_COUNT_QUERY_KEY],
      });
      alreadySubmit.set(true);
    },
  });
};
