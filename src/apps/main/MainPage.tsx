import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useCTAButton } from "./MainPage.hooks";

const MainPage = () => {
  const { onShareLink } = useCTAButton();

  return (
    <VStack backgroundColor="#FFFFF0" pt="20">
      <Text color="#222222" fontSize="3xl">
        우리 강아지에게 <strong>산책 친구</strong>를 만들어 주세요!
      </Text>
      <Text color="#222222" fontSize="3xl">
        현재 <strong>100명</strong>의 친구들이 기다리고있어요!
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
