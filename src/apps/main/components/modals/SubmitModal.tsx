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
  Text,
} from "@chakra-ui/react";
import { useSubmitModalStore } from "../../stores/submitModal.store";
import { useInput, useSubmitAction } from "./SubmitModal.hooks";
import { Balancer } from "react-wrap-balancer";

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
          <Balancer>
            <Text fontSize="md" color="#222222">
              <strong>&apos;멍더&apos;</strong>가 세상 밖으로 나오기 얼마 남지
              않았어요! 출시되면 제일 먼저 알려드리려고 해요!
            </Text>
          </Balancer>
          <FormLabel mt="6">이메일</FormLabel>
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
