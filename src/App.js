import React, { useState } from "react";
import { Box, Heading } from "@chakra-ui/core";
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

  const showPreviousMessage = () => {
    const counter = state.messageCount - 1;

    setState({
      messageCount: counter,
      message: birthdayMessages[counter].message,
      name: birthdayMessages[counter].name,
      email: birthdayMessages[counter].email
    });
  };

  return (
    <Box className="App">
      <Box as="header">
        <Heading as="h1" size="xl" textAlign="center" mt={20} mb={10}>
          Birthday Wishes From Around the Globe <br />
          <span role="img" aria-label="Celebration emojis">
            🌎 🎈 🍰 ❤️ 🍾 🌍
          </span>
        </Heading>
      </Box>
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
        onPreviousClick={showPreviousMessage}
      />
    </Box>
  );
};

export default App;
