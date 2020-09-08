export type CurrentWish = {
  message: string;
  name: string;
  email?: string;
  messageCount: number;
  numberOfMessages: number;
};

export type StoreType = {
  currentWish: CurrentWish;
  showPreviousMessage: () => void;
  showNextMessage: () => void;
  lastMessage: boolean;
};
