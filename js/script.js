'use strict';
// Задание 1
{
    /* Задание на урок:
        1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
        'Сколько фильмов вы уже посмотрели?'
        2) Создать объект personalMovieDB и в него поместить такие свойства:
            - count - сюда передается ответ на первый вопрос
            - movies - в это свойство поместить пустой объект
            - actors - тоже поместить пустой объект
            - genres - сюда поместить пустой массив
            - privat - в это свойство поместить boolean(логическое) значение false
        3) Задайте пользователю по два раза вопросы:
            - 'Один из последних просмотренных фильмов?'
            - 'На сколько оцените его?'
        Ответы стоит поместить в отдельные переменные
        Записать ответы в объект movies в формате: 
            movies: {
                'logan': '8.1'
            }
        Проверить, чтобы все работало без ошибок в консоли */
    /* Решение:
    
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
    console.log(personalMovieDB); */
}

// Задание 2
{
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
    // Решение:
    /* const askQueastion = string => prompt(string, '');
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

                            const isValid = isValueValid(
                                ratingOflastWatchedMovie,
                            );

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

    console.log('personalMovieDB', personalMovieDB); */
}

// Задание 3

/* Задание на урок:
        1) Первую часть задания повторить по уроку
        2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
        false - выводит в консоль главный объект программы
        3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
        "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
        genres
        P.S. Функции вызывать не обязательно */

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмнов вы уже посмотрели?', '');

    while (
        numberOfFilms == '' ||
        numberOfFilms === null ||
        isNaN(numberOfFilms)
    ) {
        numberOfFilms = +prompt('Сколько фильмнов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememeberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const film = prompt('Один из последних просмотренных фильмов?', ''),
            rate = prompt('На сколько оцените его?', '');

        if (
            film != null &&
            rate != null &&
            film != '' &&
            rate != '' &&
            film.length < 50
        ) {
            personalMovieDB.movies[film] = rate;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememeberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const gener = prompt(`Ваш любимый жанр под номером ${i}`, '');

        if (gener !== '' && gener !== null) {
            personalMovieDB.genres.push(gener);
            // personalMovieDB.genres = [...personalMovieDB.genres, gener];
            // personalMovieDB.genres[i - 1] = gener;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

writeYourGenres();

console.log(personalMovieDB);
