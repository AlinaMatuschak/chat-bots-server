const botSendMessage = require("../Bots/botSendMessage");
const { EVENT_RECEIVE_MESSAGE, EVENT_SEND_MESSAGE } = require("../events");
const createMessage = require("../helpers/createMessage");
const saveValue = require("../helpers/saveValue");

function receiveMessage(socket, user, users) {
  socket.on(EVENT_RECEIVE_MESSAGE, ({ text, recipient }) => {
    const newMessage = createMessage(user.id, recipient.id, text);

    saveValue(user.messages, newMessage);

    socket.emit(EVENT_SEND_MESSAGE, newMessage);

    if (recipient.type === 'bot') {
      botSendMessage(socket, recipient.name, text, user);
    } else {
      const recipientMessages = users
        .find(userMap => userMap.id === recipient.id)
        .messages;

      saveValue(recipientMessages, newMessage);

      socket.to(recipient.id).emit(EVENT_SEND_MESSAGE, newMessage);
    }
  });
};

module.exports = receiveMessage;
