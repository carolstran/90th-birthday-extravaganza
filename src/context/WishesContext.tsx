import React, { useState, createContext } from "react";
import confetti from "canvas-confetti";
import birthdayMessages from "../data/birthdayMessages";
import { CurrentWish, StoreType } from "../types";

let initialState: CurrentWish = {
  message: birthdayMessages[0].message,
  name: birthdayMessages[0].name,
  email: birthdayMessages[0].email,
  messageCount: 0,
  numberOfMessages: birthdayMessages.length
};

export const WishesContext = createContext<StoreType>({
  currentWish: initialState,
  showNextMessage: () => {},
  showPreviousMessage: () => {},
  lastMessage: false
});

const WishesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentWish, setCurrentWish] = useState<CurrentWish>(initialState);

  const showNextMessage: StoreType["showNextMessage"] = () => {
    const counter = currentWish.messageCount + 1;

    setCurrentWish(currentWish => ({
      ...currentWish,
      messageCount: counter,
      message: birthdayMessages[counter].message,
      name: birthdayMessages[counter].name,
      email: birthdayMessages[counter].email
    }));

    confetti();
  };

  const showPreviousMessage: StoreType["showPreviousMessage"] = () => {
    const counter = currentWish.messageCount - 1;

    setCurrentWish(currentWish => ({
      ...currentWish,
      messageCount: counter,
      message: birthdayMessages[counter].message,
      name: birthdayMessages[counter].name,
      email: birthdayMessages[counter].email
    }));
  };

  const store: StoreType = {
    currentWish,
    showPreviousMessage,
    showNextMessage,
    lastMessage:
      currentWish.messageCount + 1 === birthdayMessages.length ? true : false
  };

  return (
    <WishesContext.Provider value={store}>{children}</WishesContext.Provider>
  );
};

export default WishesContextProvider;
