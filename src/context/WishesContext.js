import React, { useState, createContext } from "react";
import confetti from "canvas-confetti";
import birthdayMessages from "../data/birthdayMessages";

export const WishesContext = createContext(null);

const WishesContextProvider = ({ children }) => {
  let initialState = {
    message: birthdayMessages[0].message,
    name: birthdayMessages[0].name,
    email: birthdayMessages[0].email,
    messageCount: 0,
    numberOfMessages: birthdayMessages.length
  };

  const [birthdayWish, setBirthdayWish] = useState(initialState);

  const showNextMessage = () => {
    const counter = birthdayWish.messageCount + 1;

    setBirthdayWish({
      ...birthdayWish,
      messageCount: counter,
      message: birthdayMessages[counter].message,
      name: birthdayMessages[counter].name,
      email: birthdayMessages[counter].email
    });

    confetti();
  };

  const showPreviousMessage = () => {
    const counter = birthdayWish.messageCount - 1;

    setBirthdayWish({
      ...birthdayWish,
      messageCount: counter,
      message: birthdayMessages[counter].message,
      name: birthdayMessages[counter].name,
      email: birthdayMessages[counter].email
    });
  };

  const store = {
    birthdayWish,
    showPreviousMessage,
    showNextMessage,
    lastMessage:
      birthdayWish.messageCount + 1 === birthdayMessages.length ? true : false
  };

  return (
    <WishesContext.Provider value={store}>{children}</WishesContext.Provider>
  );
};

export default WishesContextProvider;
