import React from "react";
import Message from "./Message";
import MessageCount from "./MessageCount";

const MessageContainer = props => {
  console.log("COUNT: ", props.messageCount);
  console.log("TOTAL: ", props.messageTotal);
  return (
    <div>
      <MessageCount counter={props.messageCount} total={props.messageTotal} />
      <Message message={props.message} name={props.name} email={props.email} />
      {props.lastMessage ? (
        <button onClick={() => window.location.reload(false)}>
          Read them again
        </button>
      ) : (
        <button onClick={props.onNextClick}>Next</button>
      )}
    </div>
  );
};

export default MessageContainer;
