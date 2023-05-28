import dog from "@/apps/main/assets/json/dog.json";
import {
  Button,
  ButtonGroup,
  Heading,
  Highlight,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Lottie from "lottie-react";
import { useCTAButton } from "./MainPage.hooks";
import { SubmitModal } from "./components/modals";

const MainPage = () => {
  const { show, share } = useCTAButton();

  return (
    <VStack backgroundColor="#FFFFF0" pt="20">
      <LottieAnimation loop autoplay animationData={dog} />
      <Text color="#222222" fontSize="3xl" textAlign="center">
        <strong>&apos;멍더&apos;</strong>앱을 통해서
        <br />
        우리 강아지에게 산책 친구를 만들어 주세요!
      </Text>
      <Text color="#222222" fontSize="3xl">
        <Highlight
          query="100명"
          styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
        >
          현재 100명의 친구들이 기다리고있어요!
        </Highlight>
      </Text>
      <ButtonGroup pt="20">
        <Button onClick={show}>친구 만들어 주기</Button>
        <Button onClick={share}>공유하기</Button>
      </ButtonGroup>

      <SubmitModal />
    </VStack>
  );
};

export default MainPage;

export const LottieAnimation = styled(Lottie)`
  width: 200px;
  height: 200px;
`;
