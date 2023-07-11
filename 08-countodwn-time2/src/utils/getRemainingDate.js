import getFutureDate from './getFutureDate.js';
import formatDateUnit from './formatDateUnit.js';

const getRemainingDate = () => {
    const futureMilliseconds = getFutureDate().futureMilliseconds;
    const nowMilliseconds = new Date().getTime();

    const remainingMilliseconds = futureMilliseconds - nowMilliseconds;

    const dayInMilliseconds = 24 * 60 * 60 * 1000;
    const hourInMilliseconds = 60 * 60 * 1000;
    const minuteInMilliseconds = 60 * 1000;
    const secondInMilliseconds = 1000;

    let days = formatDateUnit(
        Math.floor(remainingMilliseconds / dayInMilliseconds)
    );
    let hours = formatDateUnit(
        Math.floor(
            (remainingMilliseconds % dayInMilliseconds) / hourInMilliseconds
        )
    );

    let minutes = formatDateUnit(
        Math.floor(
            (remainingMilliseconds % hourInMilliseconds) / minuteInMilliseconds
        )
    );

    let seconds = formatDateUnit(
        Math.floor(
            (remainingMilliseconds % minuteInMilliseconds) /
                secondInMilliseconds
        )
    );

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        remainingMilliseconds: remainingMilliseconds,
    };
};

export default getRemainingDate;
