import { Highlight, Text } from "@chakra-ui/react";
import React from "react";
import { Balancer } from "react-wrap-balancer";
import { useCount } from "./CountSection.hooks";

export const CountSection = () => {
  const { userCount } = useCount();

  return (
    <Balancer>
      <Text color="#222222" fontSize="2xl" textAlign="center" mt="6">
        <Highlight
          query={`${userCount}명`}
          styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
        >
          {`현재 ${userCount}명의 친구들이 기다리고 있어요.`}
        </Highlight>
      </Text>
    </Balancer>
  );
};
