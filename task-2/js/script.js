'use strict';

/* Задание на урок:
        1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
        2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
        отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
        возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
        str.length - и получить её длину)
        3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
        "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
        "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
        4) Потренироваться и переписать цикл еще двумя способами*/

const askQueastion = string => prompt(string, '');
const isValueValid = value => value !== '' && value !== null;
const logAnswer = string => console.log(string);
const showMessage = (string = 'Ответьте на вопрос') => alert(string);
const createPersonalMovieDB = () => {
    let numberOfFilms;
    let lastWatchedMovie;
    let ratingOflastWatchedMovie;
    let message;

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
    };

    do {
        numberOfFilms = askQueastion('Сколько фильмов вы уже посмотрели');

        const isValid = isValueValid(numberOfFilms);

        if (isValid) {
            // logAnswer(numberOfFilms);

            personalMovieDB.count = Number(numberOfFilms);

            if (personalMovieDB.count < 10) {
                message = 'Просмотрено довольно мало фильмов';
                showMessage(message);
            } else if (
                personalMovieDB.count >= 10 &&
                personalMovieDB.count < 30
            ) {
                message = 'Вы классический зритель';
                showMessage(message);
            } else if (personalMovieDB.count >= 30) {
                message = 'Вы киноман';
                showMessage(message);
            } else {
                message = 'Произошла ошибка';
                showMessage(message);
            }

            do {
                lastWatchedMovie = askQueastion(
                    'Один из последних просмотренных фильмов?',
                );

                const isValid =
                    isValueValid(lastWatchedMovie) &&
                    lastWatchedMovie.length < 50;

                if (isValid) {
                    // logAnswer(lastWatchedMovie);

                    do {
                        ratingOflastWatchedMovie = askQueastion(
                            'На сколько оцените его?',
                        );

                        const isValid = isValueValid(ratingOflastWatchedMovie);

                        if (isValid) {
                            // logAnswer(ratingOflastWatchedMovie);

                            personalMovieDB.movies[
                                lastWatchedMovie
                            ] = ratingOflastWatchedMovie;

                            break;
                        }

                        showMessage();
                    } while (true);

                    break;
                }

                showMessage();
            } while (true);

            break;
        }

        showMessage();
    } while (true);

    return personalMovieDB;
};

const personalMovieDB = createPersonalMovieDB();

console.log('personalMovieDB', personalMovieDB);
