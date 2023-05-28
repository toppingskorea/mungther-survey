import { ChangeEventHandler, useCallback, useEffect, useState } from "react";
import { useSubmitModalStore } from "../../stores/submitModal.store";
import { useSubmitMutation } from "../../mutations/useSubmitMutation";
import { useToast } from "@chakra-ui/react";

export const useSubmitModal = () => {
  const onOpen = useSubmitModalStore((state) => state.onOpen);

  const show = () => {
    onOpen();
  };

  return {
    show,
  };
};

export const useInput = () => {
  const [email, setEmail] = useState<string>("");
  const [getNotice, setGetNotice] = useState<boolean>(false);

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.currentTarget.value);
  };

  const handleGetNoticeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setGetNotice(e.currentTarget.checked);
  };

  return {
    email,
    handleEmailChange,
    getNotice,
    handleGetNoticeChange,
  };
};

type UseSubmitActionParams = {
  email: string;
  getNotice: boolean;
};

export const useSubmitAction = ({
  email,
  getNotice,
}: UseSubmitActionParams) => {
  const toast = useToast();
  const { mutate, isLoading: makeSubmitButtonClickIsLoading } =
    useSubmitMutation();

  const handleSubmitButtonClick = useCallback(() => {
    if (getNotice && !email) {
      toast({
        title: "연락받으실 메일을 작성해주세요.",
        status: "error",
        containerStyle: {
          width: "96vw",
        },
        isClosable: true,
      });

      return;
    }

    mutate({
      email,
      agreement: "Y",
    });
  }, [email, getNotice, mutate, toast]);

  return {
    makeSubmitButtonClickIsLoading,
    handleSubmitButtonClick,
  };
};
