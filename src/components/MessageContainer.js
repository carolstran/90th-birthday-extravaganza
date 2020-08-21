import React, { useContext } from "react";
import Message from "./Message";
import MessageCount from "./MessageCount";
import { Box, Flex, Button } from "@chakra-ui/core";
import { WishesContext } from "../context/WishesContext";

const MessageContainer = () => {
  const {
    birthdayWish: { messageCount },
    showPreviousMessage,
    showNextMessage,
    lastMessage
  } = useContext(WishesContext);

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
          <MessageCount />
        </Flex>
        <Message />
      </Box>
      <Flex as="main" justify="center" mt={12} mb={20}>
        {lastMessage ? (
          <Button
            variantColor="red"
            variant="outline"
            onClick={() => window.location.reload(false)}
          >
            Read them again
          </Button>
        ) : (
          <>
            {messageCount === 0 ? null : (
              <Button
                variantColor="red"
                variant="outline"
                as="a"
                onClick={showPreviousMessage}
                mr={2}
              >
                Previous
              </Button>
            )}
            <Button variantColor="red" as="a" onClick={showNextMessage} ml={2}>
              Next Message
            </Button>
          </>
        )}
      </Flex>
    </>
  );
};

export default MessageContainer;
