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
    /* Решение:

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

                personalMovieDB.count = numberOfFilms;

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
                                logAnswer(ratingOflastWatchedMovie);

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
    };

    const personalMovieDB = createPersonalMovieDB();

    console.log(personalMovieDB); */
}
