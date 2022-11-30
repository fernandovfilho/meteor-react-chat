import { Meteor } from "meteor/meteor";
import { ChatsCollection } from "/imports/api/chats";

function insertChat() {
  ChatsCollection.insert({
    messages: [{ createdAt: new Date(), text: "TEste", user: "test" }],
    users: ["test"],
  });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (ChatsCollection.find().count() === 0) {
    insertChat();
  }
});
