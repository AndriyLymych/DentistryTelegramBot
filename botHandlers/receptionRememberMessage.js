// const CronJob = require('cron').CronJob;

const {bot} = require('../createBot');
const requestPromise = require('request-promise');
const {HOST} = require('../config/config');

module.exports = async msg => {

    // const job = new CronJob('3 * * * * *', ()=>{
    //     console.log('hello');
    // })

    // let resBot = ``;
    //
    let receptions = await requestPromise.get(HOST + '/receptions');
    //
    // receptions = JSON.parse(receptions);
    //
    // receptions.forEach(reception => {
    //
    //     resBot += `Добрий день, ${reception.name} ${reception.middleName}. Нагадуємо, що у Вас завтра прийом у "Simstomat" об ${reception.date}`;
    //
    //
    //     let date = new Date(reception.date);
    //
    //     date.setDate(date.getDate() - 1);
    //
    //     reception.date = date;
    //
    //     if (reception.date) {
    //         bot.sendMessage(msg.chat.id, resBot)
    //     }
    // })
};

