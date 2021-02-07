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
    const day = new Date().getDate()
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
export const upcomingGames = () => {
    return `${base_url}games?dates=${currentDate},${nextYear}&ordering=-added&page_size=15`
}
export const newGames = () => {
    return `${base_url}games?dates=${lastYear},${currentDate}&ordering=-released&page_size=15`
}
export const gameDetails = (game__id) => {
    return `${base_url}games/${game__id}`
}
export const gameScreenShot = (game__id) => {
    return `${base_url}games/${game__id}/screenshots`
}