const requestPromise = require('request-promise');
const cron = require('node-cron');

const {bot} = require('../createBot');
const {HOST, PORT} = require('../config/config');
const {oneDay: {ONE_DAY}} = require('../constant');

module.exports = async () => {
    let resBot = ``;
    const nowTime = new Date();

    const records = JSON.parse(await requestPromise.get(`${HOST}:${PORT}/receptions`));

    // cron.schedule('* * * * * *', async () => {
    //
    //     for (const record of records) {
    //         let {chat_id, date, count_mail, name, middle_name} = record;
    //         date = new Date(date);
    //
    //
    //         if ((date - nowTime) <= ONE_DAY) {
    //
    //             resBot += `Шановний(на),${name} ${middle_name}. Нагадуємо Вам, що у вас завтра прийом об ${date.toLocaleDateString()} у клініці "Simstomat"`;
    //             await bot.sendMessage(chat_id, resBot)
    //         }
    //     }
    //
    // })


};

