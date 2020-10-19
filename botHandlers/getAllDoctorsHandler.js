const {bot} = require('../createBot');
const requestPromise = require('request-promise');
const {HOST, PORT} = require('../config/config');

module.exports = async msg => {

    let resBot = ``;

    let doctors = await requestPromise.get(`${HOST}:${PORT}/doctors`);

    doctors = JSON.parse(doctors);

    doctors.forEach((doctor) => {
        const {name, middleName, surname, age, UserSpeciality:{label:speciality}} = doctor;

        resBot += `\n <i><b>👨‍⚕ 👩‍⚕ Лікар : </b></i><b>${name} ${middleName} ${surname}</b> 🔝 
    <i><b>⏳ Вік : </b></i> <b>${age}</b> \n    <i><b>🧰 Спеціальнісь:  </b></i> <b>${speciality}</b> \n\n`;
    });
    await bot.sendMessage(msg.chat.id, ' <b>НАШІ СПЕЦІАЛІСТИ  ⬇  ️💚️</b>', {parse_mode: "HTML"});

    await bot.sendMessage(msg.chat.id, resBot, {parse_mode: "HTML"})
};

