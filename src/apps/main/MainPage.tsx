import { dog } from "@/apps/main/assets/images";
import {
  Button,
  ButtonGroup,
  Divider,
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
import Image from "next/image";
import { Balancer } from "react-wrap-balancer";
import OpenGraph from "@/components/open-graph/OpenGraph";

const MainPage = () => {
  const { show, share } = useCTAButton();

  return (
    <VStack backgroundColor="#FFFFF0" pt="20">
      <OpenGraph title="멍더" />
      <ImageWrapper>
        <Image src={dog.src} width={500} height={500} alt="" />
      </ImageWrapper>
      <Balancer>
        <Text color="#222222" fontSize="3xl" textAlign="center">
          <strong>&apos;멍더&apos;</strong>&nbsp;앱을 통해서
          <br />
          우리 강아지에게 산책 친구를 만들어 주세요!
        </Text>
      </Balancer>

      <Balancer>
        <Text color="#222222" fontSize="3xl" textAlign="center" mt="6">
          <Highlight
            query="100명"
            styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
          >
            현재 100명의 친구들이 기다리고 있어요!
          </Highlight>
        </Text>
      </Balancer>
      <ButtonGroup pt="6">
        <Button onClick={show}>친구 만들어 주기</Button>
        <Button onClick={share}>공유하기</Button>
      </ButtonGroup>

      <footer>
        <Text fontSize="sm" color="#222222" mt="10">
          team Toppings 2023
        </Text>
      </footer>

      <SubmitModal />
    </VStack>
  );
};

export default MainPage;

const LottieAnimation = styled(Lottie)`
  width: 200px;
  height: 200px;
`;

const ImageWrapper = styled.div`
  padding: 20px;
`;
