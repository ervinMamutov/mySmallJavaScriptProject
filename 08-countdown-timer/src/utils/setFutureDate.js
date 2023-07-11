'use strict';
import { data, dom } from '../data.js';

const setFutureDate = () => {
  const preparationData = data.futureDate;
  console.log(preparationData);
  console.log(typeof preparationData);

  const dataFuture = new Date(...preparationData);
  const milliseconds = dataFuture.getTime();
  console.log('milliseconds : ' + milliseconds);

  return milliseconds;
};

export default setFutureDate;
