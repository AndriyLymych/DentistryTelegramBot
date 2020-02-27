const requestPromise = require('request-promise');

const {bot} = require('../createBot');
const {HOST} = require('../config/config');
const {infoMessages} = require('../constant');
module.exports = async msg => {

    let resBot = ``;

    let records = await requestPromise.get(HOST + '/receptions');

    records = JSON.parse(records);

    records.forEach(record => {
        if (record.chat_id === msg.chat.id) {
            resBot += record.name;
            bot.sendMessage(msg.chat.id, resBot);
            console.log(msg.chat.id);
        } else {
            console.log(msg.chat.id);

            bot.sendMessage(msg.chat.id, infoMessages.getEmail);
        }


    });


};