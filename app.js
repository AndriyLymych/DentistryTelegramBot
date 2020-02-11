const {
  infoHandlers: {
    goodbyeHandler,
    aboutUsHandler,
    workingTimeHandler,
    locationHandler,
    welcomeHandler
  },
  getAllDoctorsHandler,
  getServicesHandler
} = require('./botHandlers');
const {bot} = require('./createBot');
const {userMessages, infoMessages: {anyMsg}} = require('./constant');

try {
  bot.on('message', (msg) => {
    const botCommand = Object.values(userMessages);

    if (botCommand.includes(msg.text)) {
      bot.onText(new RegExp(userMessages.services), getServicesHandler);
      bot.onText(new RegExp(userMessages.doctors), getAllDoctorsHandler);

      // Info handlers
      bot.onText(new RegExp(userMessages.aboutUs), aboutUsHandler);
      bot.onText(new RegExp(userMessages.bye), goodbyeHandler);
      bot.onText(new RegExp(userMessages.location), locationHandler);
      bot.onText(new RegExp(userMessages.workingTime), workingTimeHandler);
      bot.onText(new RegExp(userMessages.start), welcomeHandler);
    } else {
      bot.sendMessage(msg.chat.id, anyMsg);
    }
  })
} catch (e) {
  bot.sendMessage('ADMIN CHAT ID', JSON.stringify(e))
}




