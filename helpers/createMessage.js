const getDate = require("./getDate");
const { v4: uuidv4 } = require('uuid');

const createMessage = (sender, recipient, text) => ({
  id: uuidv4(),
  sender,
  recipient,
  text,
  date: getDate(),
});

module.exports = createMessage;
