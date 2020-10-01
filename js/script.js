'use strict';

const numberOfFilms = Number(prompt('Сколько фильмов вы уже посмотрели', ''));
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
const lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', '');
const ratingOflastWatchedMovie = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastWatchedMovie] = ratingOflastWatchedMovie;

console.log(personalMovieDB);
