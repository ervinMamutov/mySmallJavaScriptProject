import { dom } from '../data.js';
import getFutureDate from '../utils/getFutureDate.js';

const giveawayInfo = () => {
    const futureData = getFutureDate();
    dom.giveaway.innerText = `
giveaway ends on ${futureData.day}, ${futureData.date} ${futureData.month} ${futureData.year} ${futureData.hours}:${futureData.minutes}`;
};

export default giveawayInfo;
