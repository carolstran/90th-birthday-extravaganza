import React from "react";
import { Badge } from "@chakra-ui/core";

const MessageCount = props => (
  <Badge
    role="status"
    variantColor="red"
    rounded="sm"
    padding="0px 4px"
    minH="auto"
    letterSpacing="widest"
    mb={4}
  >
    Message {props.counter + 1} of {props.total}
  </Badge>
);

export default MessageCount;
