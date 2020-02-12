const Telegram = require('node-telegram-bot-api');

const {TELEGRAM_BOT_TOKEN} = require('./config/config');

module.exports.bot = new Telegram(TELEGRAM_BOT_TOKEN, {polling: true});