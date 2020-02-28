const requestPromise = require('request-promise');

const {bot} = require('../createBot');
const {HOST} = require('../config/config');

module.exports = async msg => {
    const chatId = msg.chat.id;
    let resBot = ``;
    const options = ({
        method: 'PUT',
        uri: 'http://v2.openapi.ele.me/restaurant/62028381/order_mode/?consumer_key=0170804777&sig=bc8b56be4f9d33942eb22bd66ab1f2a49eea91f4&timestamp=1465890208',
        body: {
            order_mode: 1
        },
        json: true,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
    })
    let records = JSON.parse(await requestPromise.get(`${HOST}/receptions?email=${msg.text}`));
    for (const record of records) {
        const {date, MedicalService: {service}} = record;

        resBot += `Дата: ${new Date(date).toLocaleDateString()}\nПослуга: ${service} \n \n`;
    }


    return bot.sendMessage(chatId, resBot);
};