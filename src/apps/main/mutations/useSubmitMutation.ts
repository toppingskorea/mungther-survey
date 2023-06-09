import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSubmitModalStore } from "../stores/submitModal.store";
import { makeSubmit } from "../apis/submit";
import { useGoogleAnalytics } from "@/hooks";
import { alreadySubmit } from "../components/modals/SubmitModal.hooks";
import { AxiosError } from "axios";
import { GET_USER_COUNT_QUERY_KEY } from "../queries/useGetUserCountQuery";

export const useSubmitMutation = () => {
  const queryClient = useQueryClient();
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
      queryClient.invalidateQueries({
        queryKey: [GET_USER_COUNT_QUERY_KEY],
      });
      alreadySubmit.set(true);
    },
    onError: (
      err: AxiosError<{
        code: string;
      }>
    ) => {
      if (err.response?.data.code === "U003") {
        toast({
          title: "올바른 이메일을 작성해주세요.",
          status: "error",
          duration: 2000,
          containerStyle: {
            width: "96vw",
          },
          isClosable: true,
        });
        return;
      }
      if (err.response?.data.code === "U004") {
        toast({
          title: "이미 신청한 이메일이에요!",
          status: "error",
          duration: 2000,
          containerStyle: {
            width: "96vw",
          },
          isClosable: true,
        });
        return;
      }
    },
  });
};
