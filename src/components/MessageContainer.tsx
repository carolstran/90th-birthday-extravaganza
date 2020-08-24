import React, { useContext } from "react";
import Message from "./Message";
import MessageCount from "./MessageCount";
import Button from "./Button";
import { Box, Flex } from "@chakra-ui/core";
import { WishesContext } from "../context/WishesContext";

const MessageContainer = () => {
  const {
    birthdayWish: { messageCount },
    showPreviousMessage,
    showNextMessage,
    lastMessage
  }: any = useContext(WishesContext); // TODO

  return (
    <>
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
      <Flex as="main" justify="center" mt={12} mb={20}>
        {lastMessage ? (
          <Button
            children="Read them again"
            variant="outline"
            onClick={() => window.location.reload(false)}
          />
        ) : (
          <>
            {messageCount === 0 ? null : (
              <Button
                children="Previous"
                variant="outline"
                element="a"
                onClick={showPreviousMessage}
                marginRight={2}
              />
            )}
            <Button
              children="Next Message"
              element="a"
              onClick={showNextMessage}
              marginLeft={2}
            />
          </>
        )}
      </Flex>
    </>
  );
};

export default MessageContainer;
