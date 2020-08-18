import React from "react";

const Message = props => (
  <div>
    <p>{props.message}</p>
    <a href={`mailto:${props.email}`}>{props.name}</a>
  </div>
);

export default Message;
