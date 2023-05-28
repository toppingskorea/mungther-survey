import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";

const MainPage = () => {
  return (
    <Container>
      <VStack>
        <Heading>123,213 명의 친구들을 만들어보세요</Heading>
      </VStack>

      <VStack>
        <Heading>나오면 알려드릴게요.</Heading>
        <Input placeholder="emaa@gmail.com" />
      </VStack>

      <Button>공유하기</Button>
    </Container>
  );
};

export default MainPage;
