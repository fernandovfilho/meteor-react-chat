import { Mongo } from "meteor/mongo";

export interface Chat {
  users: string[];
  lastMessage?: string;
  lastMessageAt?: Date;
  messages: Message[];
}

export interface Message {
  createdAt: Date;
  text: string;
  user: string;
}

export const ChatsCollection = new Mongo.Collection<Chat>("chats");
