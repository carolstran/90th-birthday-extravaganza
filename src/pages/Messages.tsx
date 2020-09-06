import React from "react";
import Message from "../components/Message";
import MessageCount from "../components/MessageCount";
import ButtonContainer from "../components/ButtonContainer";
import { Box, Flex } from "@chakra-ui/core";
import { RouteComponentProps } from "@reach/router";
import Header from "../components/Header";

const Messages = (props: RouteComponentProps) => (
  <>
    <Header>Birthday Wishes From Around the Globe</Header>
    <main>
      <Box
        bg="gray.50"
        borderRadius="6px"
        mx="auto"
        maxW="80%"
        position="relative"
        px={12}
        py={8}
      >
        <Flex justify="center">
          <MessageCount />
        </Flex>
        <Message />
      </Box>
      <ButtonContainer />
    </main>
  </>
);

export default Messages;
