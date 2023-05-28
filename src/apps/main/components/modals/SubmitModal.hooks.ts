import { ChangeEventHandler, useCallback, useEffect, useState } from "react";
import { useSubmitModalStore } from "../../stores/submitModal.store";
import { useSubmitMutation } from "../../mutations/useSubmitMutation";

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

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.currentTarget.value);
  };

  return {
    email,
    handleEmailChange,
  };
};

type UseSubmitActionParams = {
  email: string;
};

export const useSubmitAction = ({ email }: UseSubmitActionParams) => {
  const { mutate, isLoading: makeSubmitButtonClickIsLoading } =
    useSubmitMutation();

  const handleSubmitButtonClick = useCallback(() => {
    mutate({
      email,
      agreement: "Y",
    });
  }, [email, mutate]);

  return {
    makeSubmitButtonClickIsLoading,
    handleSubmitButtonClick,
  };
};
