import React, { useState, createContext } from "react";
import confetti from "canvas-confetti";
import birthdayMessages from "../data/birthdayMessages";
import { BirthdayWish } from "../types";

// type StoreProps = {
//   birthdayWish: BirthdayWish;
//   showPreviousMessage: () => void;
//   showNextMessage: () => void;
//   lastMessage: boolean;
// };

let initialState: BirthdayWish = {
  message: birthdayMessages[0].message,
  name: birthdayMessages[0].name,
  email: birthdayMessages[0].email,
  messageCount: 0,
  numberOfMessages: birthdayMessages.length
};

export const WishesContext = createContext<BirthdayWish>(initialState);

const WishesContextProvider = ({ children }: any) => {
  const [birthdayWish, setBirthdayWish] = useState(initialState);

  const showNextMessage: () => void = () => {
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

  const showPreviousMessage: () => void = () => {
    const counter = birthdayWish.messageCount - 1;

    setBirthdayWish({
      ...birthdayWish,
      messageCount: counter,
      message: birthdayMessages[counter].message,
      name: birthdayMessages[counter].name,
      email: birthdayMessages[counter].email
    });
  };

  // TODO
  const store: any = {
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
