import React, { useState } from "react";
import birthdayMessages from "./data/birthdayMessages";
import MessageContainer from "./components/MessageContainer";
import confetti from "canvas-confetti";

const App = () => {
  let initialState = {
    message: birthdayMessages[0].message,
    name: birthdayMessages[0].name,
    email: birthdayMessages[0].email,
    messageCount: 0
  };

  const [state, setState] = useState(initialState);

  const showNextMessage = () => {
    const counter = state.messageCount + 1;

    setState({
      messageCount: counter,
      message: birthdayMessages[counter].message,
      name: birthdayMessages[counter].name,
      email: birthdayMessages[counter].email
    });

    confetti();
  };

  return (
    <div className="App">
      <div as="header">
        <h1>Happy 90th Birthday!</h1>
      </div>
      <MessageContainer
        messageCount={state.messageCount}
        message={state.message}
        name={state.name}
        email={state.email}
        messageTotal={birthdayMessages.length}
        lastMessage={
          state.messageCount + 1 === birthdayMessages.length ? true : false
        }
        onNextClick={showNextMessage}
      />
    </div>
  );
};

export default App;
