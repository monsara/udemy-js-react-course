'use strict';

/* Задание на урок:
        1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
        перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
        Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
        2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
        переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
        3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
        Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
        при помощи метода forEach вывести в консоль сообщения в таком виде:
        "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"
    */

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start() {
        this.count = +prompt('Сколько фильмнов вы уже посмотрели?', '');

        while (this.count == '' || this.count === null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмнов вы уже посмотрели?', '');
        }
    },
    rememeberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const film = prompt('Один из последних просмотренных фильмов?', '');
            const rate = prompt('На сколько оцените его?', '');

            if (
                film != null &&
                rate != null &&
                film != '' &&
                rate != '' &&
                film.length < 50
            ) {
                this.movies[film] = Number(rate);

                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel() {
        if (this.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count < 30) {
            console.log('Вы классический зритель');
        } else if (this.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB(hidden) {
        if (!hidden) {
            console.log(this);
        }
    },
    writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(
                `Ваш любимый жанр под номером ${i}`,
                '',
            ).toLowerCase();

            if (genre !== '' && genre !== null) {
                this.genres = [...this.genres, genre];
                // this.genres.push(genre);
                // this.genres[i - 1] = genre;

                console.log('done');
            } else {
                console.log('error');

                i--;
            }
        }

        this.genres
            .sort()
            .forEach((genre, index) =>
                console.log(`Любимый жанр #${index + 1} - ${genre}`),
            );
    },
    toggleVisibleMyDB() {
        this.privat = this.privat ? false : true;
    },
};

// personalMovieDB.start();
// personalMovieDB.rememeberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();

console.log(personalMovieDB);

/* 
    Решение с помощью функции конструктора
    const PersonalMovieDB = function () {
    this.count = 0;
    this.movies = {};
    this.actors = {};
    this.genres = [];
    this.privat = false;

    this.start = function () {
        this.count = +prompt('Сколько фильмнов вы уже посмотрели?', '');

        while (this.count == '' || this.count === null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмнов вы уже посмотрели?', '');
        }
    };
    this.rememeberMyFilms = function () {
        for (let i = 0; i < 2; i++) {
            const film = prompt('Один из последних просмотренных фильмов?', '');
            const rate = prompt('На сколько оцените его?', '');

            if (
                film != null &&
                rate != null &&
                film != '' &&
                rate != '' &&
                film.length < 50
            ) {
                this.movies[film] = Number(rate);

                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    };
    this.detectPersonalLevel = function () {
        if (this.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count < 30) {
            console.log('Вы классический зритель');
        } else if (this.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    };
    this.showMyDB = function (hidden) {
        if (!hidden) {
            console.log(this);
        }
    };
    this.writeYourGenres = function () {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

            if (genre !== '' && genre !== null) {
                this.genres = [...this.genres, genre];
                // this.genres.push(genre);
                // this.genres[i - 1] = genre;

                console.log('done');
            } else {
                console.log('error');

                i--;
            }
        }
    };
    this.toggleVisibleMyDB = function () {
        this.privat = this.privat ? false : true;
    };
}; 

const myPersonalMovieDB = new PersonalMovieDB();

myPersonalMovieDB.start();
myPersonalMovieDB.rememeberMyFilms();
myPersonalMovieDB.detectPersonalLevel();
myPersonalMovieDB.showMyDB();
myPersonalMovieDB.writeYourGenres();
myPersonalMovieDB.toggleVisibleMyDB();

console.log(myPersonalMovieDB);
*/
