import { useGoogleAnalytics } from "@/hooks";
import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { Balancer } from "react-wrap-balancer";
import { useSubmitModalStore } from "../../stores/submitModal.store";
import { useInput, useSubmitAction } from "./SubmitModal.hooks";

export const SubmitModal = () => {
  const { sendClickEventToGoogleAnalytics } = useGoogleAnalytics();
  const [isOpen, onClose] = useSubmitModalStore((state) => [
    state.isOpen,
    state.onClose,
  ]);

  const { email, handleEmailChange, getNotice, handleGetNoticeChange } =
    useInput();

  const { handleSubmitButtonClick, makeSubmitButtonClickIsLoading } =
    useSubmitAction({
      email,
      getNotice,
    });

  const handleCancelButtonClick = useCallback(() => {
    onClose();
    sendClickEventToGoogleAnalytics({
      eventName: "modal_cancel_button_click",
    });
  }, [onClose, sendClickEventToGoogleAnalytics]);
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent marginX="4">
        <ModalHeader>신청</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack align="flex-start">
            <Balancer>
              <Text fontSize="md" color="#222222">
                <strong>&apos;멍더&apos;</strong>가 세상 밖으로 나오기까지 얼마
                남지 않았어요!
                <br /> 출시되면 제일 먼저 알려드리려고 해요.
              </Text>
            </Balancer>

            <Checkbox
              color="#222222"
              my="6"
              checked={getNotice}
              onChange={handleGetNoticeChange}
              colorScheme="orange"
            >
              이메일로 멍더오픈 소식을 받아보실래요?
            </Checkbox>
          </VStack>
          {getNotice ? (
            <Input
              mt="2"
              placeholder="연락받으실 메일을 작성해주세요."
              value={email}
              onChange={handleEmailChange}
            />
          ) : null}
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="orange"
            mr={3}
            onClick={handleSubmitButtonClick}
            isLoading={makeSubmitButtonClickIsLoading}
          >
            {getNotice ? "멍더 출시 알림받기🐶" : "멍더 오픈 해주세요🐶"}
          </Button>
          <Button onClick={handleCancelButtonClick}>취소</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
