const {infoMessages} = require("../../constant");
const {bot} = require('../../createBot');

module.exports = async msg => {
  await bot.sendMessage(msg.chat.id, `До побачення, ${msg.from.first_name}` + infoMessages.bye);
}
