import React, { useContext } from "react";
import Message from "./Message";
import MessageCount from "./MessageCount";
import Button from "./Button";
import { Box, Flex } from "@chakra-ui/core";
import { WishesContext } from "../context/WishesContext";
import { StoreType } from "../types";

const MessageContainer = () => {
  const {
    currentWish: { messageCount, numberOfMessages },
    showPreviousMessage,
    showNextMessage,
    lastMessage
  }: StoreType = useContext(WishesContext);

  return (
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
      <Flex justify="center" mt={12} mb={20}>
        {lastMessage ? (
          <Button
            ariaLabel="Reload the page to read the messages again."
            element="button"
            variant="outline"
            action={() => window.location.reload(false)}
          >
            Read them again
          </Button>
        ) : (
          <>
            {messageCount === 0 ? null : (
              <Button
                ariaLabel={`Show message ${messageCount} of ${numberOfMessages}.`}
                variant="outline"
                action={showPreviousMessage}
                marginRight={2}
              >
                Previous
              </Button>
            )}
            <Button
              ariaLabel={`Show message ${messageCount +
                2} of ${numberOfMessages}.`}
              action={showNextMessage}
              marginLeft={2}
            >
              Next
            </Button>
          </>
        )}
      </Flex>
    </main>
  );
};

export default MessageContainer;
