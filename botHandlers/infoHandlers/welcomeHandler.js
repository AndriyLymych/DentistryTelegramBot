const {infoMessages} = require("../../constant");
const {bot} = require('../../createBot');

module.exports = async msg => {
  await bot.sendMessage(
    msg.chat.id, `Добрий день, ${msg.from.first_name}!` + infoMessages.start, infoMessages.menu
  );
}
