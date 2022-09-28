"use strict";

const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один із останніх фільмів?', ''),
      b = prompt('Яку оцінку дасте йому?', ''),
      c = prompt('Один із останніх фільмів?', ''),
      d = prompt('Яку оцінку дасте йому?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


