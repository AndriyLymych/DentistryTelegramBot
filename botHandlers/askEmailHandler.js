const {bot} = require('../createBot');
const {infoMessages} = require('../constant');

module.exports = async msg => {

    const chatId = msg.chat.id;

    await bot.sendMessage(chatId, infoMessages.getEmail);

};
