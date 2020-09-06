import React, { useContext } from "react";
import Message from "./Message";
import MessageCount from "./MessageCount";
import Button from "./Button";
import { Box, Flex } from "@chakra-ui/core";
import { WishesContext } from "../context/WishesContext";
import { StoreType } from "../types";
import { RouteComponentProps } from "@reach/router";
import Header from "./Header";

const MessageContainer = (props: RouteComponentProps) => {
  const {
    currentWish: { messageCount, numberOfMessages },
    showPreviousMessage,
    showNextMessage,
    lastMessage
  }: StoreType = useContext(WishesContext);

  const generateAriaLabel = (messageCountForLabel: number) => {
    return `Show message ${messageCountForLabel} of ${numberOfMessages}.`;
  };

  return (
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
                  ariaLabel={generateAriaLabel(messageCount)}
                  variant="outline"
                  action={showPreviousMessage}
                  marginRight={2}
                >
                  Previous
                </Button>
              )}
              <Button
                ariaLabel={generateAriaLabel(messageCount + 2)}
                action={showNextMessage}
                marginLeft={2}
              >
                Next
              </Button>
            </>
          )}
        </Flex>
      </main>
    </>
  );
};

export default MessageContainer;
