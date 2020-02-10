const Telegram = require('node-telegram-bot-api');

const {TELEGRAM_BOT_TOKEN} = require('./config/config');

const bot = new Telegram(TELEGRAM_BOT_TOKEN, {polling: true});

bot.on('message', async msg => {
    const id = msg.chat.id;

    await bot.sendMessage(id, 'Привіт', {
        reply_markup: {
            keyboard: [["Про ", "Second sample"], ["Keyboard"], ["I'm robot"]]
        }
    })
})
