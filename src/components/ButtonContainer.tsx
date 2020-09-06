import React, { useContext } from "react";
import Button from "./Button";
import { Flex } from "@chakra-ui/core";
import { WishesContext } from "../context/WishesContext";
import { StoreType } from "../types";

const ButtonContainer = () => {
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
  );
};

export default ButtonContainer;
