import { ChangeEventHandler, useCallback, useEffect, useState } from "react";
import { useSubmitModalStore } from "../../stores/submitModal.store";
import { useSubmitMutation } from "../../mutations/useSubmitMutation";
import { useToast } from "@chakra-ui/react";
//@ts-ignore
import { TypedStorage } from "@toss/storage/typed";
import { useIncreaseCount } from "../../mutations/useIncreaseCount";

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

export const alreadySubmit = new TypedStorage<boolean>("alreadySubmit", {
  initialValue: false,
});

export const useSubmitAction = ({
  email,
  getNotice,
}: UseSubmitActionParams) => {
  const toast = useToast();
  const { mutate: submitMutate, isLoading: submitIsLoading } =
    useSubmitMutation();
  const { mutate: increaseCountMutate, isLoading: increaseCountIsLoading } =
    useIncreaseCount();

  // eslint-disable-next-line react-hooks/exhaustive-deps

  const handleSubmitButtonClick = useCallback(() => {
    if (!getNotice && alreadySubmit.get()) {
      toast({
        title: "이미 참여하셨어요. 멍더를 기다려주세요",
        status: "error",
        containerStyle: {
          width: "96vw",
        },
        isClosable: true,
      });

      return;
    }

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
    if (getNotice) {
      submitMutate({
        email,
        agreement: "Y",
      });
    } else {
      increaseCountMutate();
    }
  }, [email, getNotice, increaseCountMutate, submitMutate, toast]);

  return {
    makeSubmitButtonClickIsLoading: submitIsLoading || increaseCountIsLoading,
    handleSubmitButtonClick,
  };
};
