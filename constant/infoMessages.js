const start = ' Ласкаво просимо у "Simstomat"! Оберіть, будь ласка, потрібний вам розділ із меню:';
const menu =
    {
        reply_markup: {
            keyboard: [
                ["Про 'Simstomat'", "Де знаходиться клініка"],
                ["Послуги клініки", "Працівники", "Графік роботи"],
                ["Мої записи на прийом", "До побачення"]
            ]
        }
    };

const aboutUs = 'Наша стоматологія - це новітня апаратура та висококваліфіковані лікарі. Ми надаємо повний спектр ' +
    'послуг, від консультації до протезування та художньої реставрації зубів. З нами Ви можете бути впевнені у' +
    ' здоров\'ї своїх зубів. Нашу професійність підтверджено сотнями задоволених клієнтів.';
const anyMsg = 'Для того щоб почати спілкуватися з ботом, натисніть "start" і виберіть один із розділів меню.';

const workingTime = `Робочі дні:  пн-пт 

Робочі години: 09:00-20:00

Номери телефону:
            ${+380677441157}
            ${+380934081920}
            ${+380444335397}
            
 Скринька: simstomat@gmail.com`;

const location = {
    lat: 50.5049227,
    long: 30.4238932,
    locInfo: 'Проспект Правди, 72, Київ'
};
const bye = ' ! Дякуємо, що скористалися послугами нашого бота!';
const getEmail = `Введіть, будь ласка, адресу своєї електронної скриньки`;
module.exports = {
    start,
    menu,
    aboutUs,
    anyMsg,
    location,
    workingTime,
    bye,
    getEmail
};