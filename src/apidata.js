const base_url = 'https://api.rawg.io/api/';

const currentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10) {
        return `0${month}`
    }
    else {
        return month
    }
}

const currentDay = () => {
    const day = new Date().getDay()
    if(day < 10) {
        return `0${day}`
    }
    else {
        return day
    }
}

const year = new Date().getFullYear();

const currentDate = `${year}-${currentMonth()}-${currentDay()}`;
const lastYear = `${year-1}-${currentMonth()}-${currentDay()}`;
const nextYear = `${year+1}-${currentMonth()}-${currentDay()}`;

export const popularGame = () => {
    return `${base_url}games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=15`
}

