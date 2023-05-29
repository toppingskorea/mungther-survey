import { dog } from "@/apps/main/assets/images";
import OpenGraph from "@/components/open-graph/OpenGraph";
import { Button, ButtonGroup, Skeleton, Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Suspense } from "@suspensive/react";
import Lottie from "lottie-react";
import Image from "next/image";
import { Balancer } from "react-wrap-balancer";
import { useCTAButton } from "./MainPage.hooks";
import { SubmitModal } from "./components/modals";
import { CountSection } from "./components/sections/CountSection";

const MainPage = () => {
  const { handleCreateFriendButtonClick, share } = useCTAButton();

  return (
    <VStack backgroundColor="#FFFFF0" pt="20">
      <OpenGraph title="멍더" />
      <ImageWrapper>
        <Image src={dog.src} width={500} height={500} alt="" />
      </ImageWrapper>
      <Balancer>
        <Text color="#222222" fontSize="2xl" textAlign="center">
          <strong>&apos;멍더&apos;</strong>&nbsp;앱을 통해서
          <br />
          우리 강아지에게 산책 친구를 만들어 주세요!
        </Text>
      </Balancer>

      <Suspense.CSROnly fallback={<Skeleton width="300px" height="30px" />}>
        <CountSection />
      </Suspense.CSROnly>
      <ButtonGroup pt="6">
        <Button onClick={handleCreateFriendButtonClick} colorScheme="orange">
          친구 만들어 주기
        </Button>
        <Button onClick={share}>공유하기</Button>
      </ButtonGroup>

      <footer>
        <Text fontSize="sm" color="#222222" mt="10">
          team <strong>Toppings</strong> 2023
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
