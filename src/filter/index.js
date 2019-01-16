import date from './date';
import sum from './sum';
import averageLoadRate from './averageLoadRate';
import percent from './percent';

export default function (Vue) {
    Vue.use(date);
    Vue.use(sum);
    Vue.use(averageLoadRate);
    Vue.use(percent);
}