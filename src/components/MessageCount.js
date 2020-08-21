import React, { useContext } from "react";
import { WishesContext } from "../context/WishesContext";
import { Badge } from "@chakra-ui/core";

const MessageCount = () => {
  const {
    birthdayWish: { messageCount, numberOfMessages }
  } = useContext(WishesContext);

  return (
    <Badge
      role="status"
      variantColor="red"
      rounded="sm"
      padding="0px 4px"
      minH="auto"
      letterSpacing="widest"
      mb={4}
    >
      Message {messageCount + 1} of {numberOfMessages}
    </Badge>
  );
};

export default MessageCount;
