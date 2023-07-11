import { data } from '../data.js';

const getFutureDate = () => {
    const futureTime = new Date(2023, 11, 17, 17, 30, 0);

    const year = futureTime.getFullYear();
    const month = futureTime.getMonth(); // 0 - 11
    const date = futureTime.getDate();
    const day = futureTime.getDay(); // 0 - 6

    const hours = futureTime.getHours();
    const minutes = futureTime.getMinutes();

    return {
        day: data.days[day],
        date: date,
        month: data.months[month],
        year: year,
        hours: hours,
        minutes: minutes,
        futureMilliseconds: futureTime.getTime(),
    };
};

export default getFutureDate;
