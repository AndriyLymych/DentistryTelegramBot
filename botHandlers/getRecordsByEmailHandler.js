const requestPromise = require('request-promise');

const {bot} = require('../createBot');
const {HOST, PORT} = require('../config/config');

module.exports = async msg => {
    const chatId = msg.chat.id;

    let resBot = ``;

    if (!msg.text.includes('@') ) {
        return bot.sendMessage(chatId, '☹️ Зареєстрованих записів по цій адресі електронної скриньки немає.Ви можете записатися на прийом на нашому сайті https://simstomat.kiev.ua/ 👈')
    }

    let records = JSON.parse(await requestPromise.get(`${HOST}:${PORT}/receptions/telegram?email=${msg.text}`));

    if (!records.length ) {
        return bot.sendMessage(chatId, '☹️ Зареєстрованих записів по цій адресі електронної скриньки немає.Ви можете записатися на прийом на нашому сайті https://simstomat.kiev.ua/ 👈')
    }


    for (const record of records) {
        let {date, MedicalService: {service}} = record;

        date = new Date(date);

        resBot += `⚙️ <i><b>Послуга:</b></i><b> ${service}</b> \n🗓 <i><b>Дата:</b></i> <b>${date.getHours()}:${date.getMinutes()}  ${date.getDay() + 1}-${date.getMonth() + 1}-${date.getFullYear()}</b>\n \n`;

    }


     bot.sendMessage(chatId, resBot, {parse_mode: "HTML"});
};