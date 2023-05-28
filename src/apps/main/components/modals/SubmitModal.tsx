import {
  Button,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useSubmitModalStore } from "../../stores/submitModal.store";
import { useInput, useSubmitAction } from "./SubmitModal.hooks";

export const SubmitModal = () => {
  const [isOpen, onClose] = useSubmitModalStore((state) => [
    state.isOpen,
    state.onClose,
  ]);

  const { email, handleEmailChange } = useInput();

  const { handleSubmitButtonClick, makeSubmitButtonClickIsLoading } =
    useSubmitAction({
      email,
    });

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent marginX="4">
        <ModalHeader>신청</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormLabel>이메일</FormLabel>
          <Input
            placeholder="연락받으실 메일을 작성해주세요."
            value={email}
            onChange={handleEmailChange}
          />
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="orange"
            mr={3}
            onClick={handleSubmitButtonClick}
            isLoading={makeSubmitButtonClickIsLoading}
          >
            멍더 출시 알림받기🐶
          </Button>
          <Button onClick={onClose}>취소</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
