import dog from "@/apps/main/assets/json/dog.json";
import {
  Button,
  Heading,
  Highlight,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Lottie from "lottie-react";
import { useCTAButton } from "./MainPage.hooks";

const MainPage = () => {
  const { onShareLink } = useCTAButton();

  return (
    <VStack backgroundColor="#FFFFF0" pt="20">
      <LottieAnimation loop autoplay animationData={dog} />
      <Text color="#222222" fontSize="3xl">
        우리 강아지에게 <strong>산책 친구</strong>를 만들어 주세요!
      </Text>
      <Text color="#222222" fontSize="3xl">
        <Highlight
          query="100명"
          styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
        >
          현재 100명의 친구들이 기다리고있어요!
        </Highlight>
      </Text>

      <VStack>
        <Heading>나오면 알려드릴게요.</Heading>
        <Input placeholder="emaa@gmail.com" />
      </VStack>

      <Button onClick={onShareLink}>공유하기</Button>
    </VStack>
  );
};

export default MainPage;

export const LottieAnimation = styled(Lottie)`
  width: 200px;
  height: 200px;
`;
