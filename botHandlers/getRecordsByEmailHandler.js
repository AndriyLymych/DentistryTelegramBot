const requestPromise = require('request-promise');

const {bot} = require('../createBot');
const {HOST, PORT} = require('../config/config');

module.exports = async msg => {
    const chatId = msg.chat.id;

    let resBot = ``;

    JSON.stringify(await requestPromise.put(`${HOST}:${PORT}/patients/reception?email=${msg.text}`, {
        body: {
            chat_id: chatId
        },
        json: true,
        encoding: 'utf8'
    }));

    let records = JSON.parse(await requestPromise.get(`${HOST}:${PORT}/receptions?email=${msg.text}`));

    for (const record of records) {
        let {date, MedicalService: {service}} = record;

        date= new Date(date);

        resBot += `⚙️ <i><b>Послуга:</b></i><b> ${service}</b> \n🗓 <i><b>Дата:</b></i> <b>${date.getHours()}:${date.getMinutes()}  ${date.getDay()+1}-${date.getMonth()+1}-${date.getFullYear()}</b>\n \n`;

    }


    bot.sendMessage(chatId, resBot,{parse_mode: "HTML"});
};