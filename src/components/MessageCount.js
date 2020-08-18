import React from "react";

const MessageCount = props => (
  <p>
    Message {props.counter + 1} of {props.total}
  </p>
);

export default MessageCount;
