const getDate = require("../helpers/getDate");

const ReverseBot = {
  id: 'ReverseBot',
  name: 'ReverseBot',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In vero, qui odit cumque reprehenderit distinctio mollitia maiores odio non laboriosam nam, quis ducimus ex atque aspernatur quas exercitationem, animi sunt quidem expedita beatae ratione doloribus? Repudiandae incidunt architecto voluptatum, perferendis sint, eum accusamus quam culpa similique labore maxime debitis ipsum?',
  isOnline: true,
  img: 'https://i.ibb.co/LrYNhsg/Layer-2.png',
  type: 'bot',
}

const ReverseBotGenerateMessage = (text, recipient) => {
  return {
    sender: ReverseBot.id,
    recipient,
    text: [...text].reverse().join(''),
    date: getDate(),
  };
}

module.exports = { ReverseBot, ReverseBotGenerateMessage };
