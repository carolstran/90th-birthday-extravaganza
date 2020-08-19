import React from "react";
import Message from "./Message";
import MessageCount from "./MessageCount";
import { Box, Flex, Button } from "@chakra-ui/core";

const MessageContainer = props => {
  return (
    <>
      <Box
        bg="gray.50"
        borderRadius="6px"
        mx="auto"
        maxW={800}
        position="relative"
        px={16}
        py={8}
      >
        <Flex justify="center">
          <MessageCount
            counter={props.messageCount}
            total={props.messageTotal}
          />
        </Flex>
        <Message
          message={props.message}
          name={props.name}
          email={props.email}
        />
      </Box>
      <Flex as="main" justify="center" mt={12}>
        {props.lastMessage ? (
          <Button
            variantColor="red"
            variant="outline"
            onClick={() => window.location.reload(false)}
          >
            Read them again
          </Button>
        ) : (
          <Button variantColor="red" as="a" onClick={props.onNextClick}>
            Next
          </Button>
        )}
      </Flex>
    </>
  );
};

export default MessageContainer;
