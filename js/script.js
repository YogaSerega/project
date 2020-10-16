"use strict";

let numberOfFilms;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
    }
}
start();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert('Просмотренно довольно мало фильмов');
    } else if (numberOfFilms > 10 && numberOfFilms <= 30) {
        alert('Вы классический зритель');
    } else if (numberOfFilms >= 30) {
        alert('Вы киноман');
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);



function rememberMyFilms() {
    for (let i = 1; i < 3; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?');

        if (a !== null && b !== null && a.length < 50 && a != '' && b != '') {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
            console.log('error');
        }
    }

}
rememberMyFilms();

console.log(personalMovieDB);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genres = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] =genres;
    }
}