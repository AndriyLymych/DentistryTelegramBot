const {bot} = require('../createBot');
const {infoMessages} = require('../constant');

const anyMessage = bot.on('message', async msg => {
    await bot.sendMessage(msg.chat.id, infoMessages.anyMsg);
});

module.exports = {
    anyMessage
}