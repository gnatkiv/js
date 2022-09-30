"use strict";

const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* const a = prompt('Один із останніх фільмів?', ''),
      b = prompt('Яку оцінку дасте йому?', ''),
      c = prompt('Один із останніх фільмів?', ''),
      d = prompt('Яку оцінку дасте йому?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */    //цю частину ми автоматизували часимною нижче

for ( let i = 0; i < 2; i++) {
    const a = prompt('Один із останніх фільмів?', ''),
          b = prompt('Яку оцінку дасте йому?', '');

    if (a != null  && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Ви подивились мало фільмів =(');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Ви звичайний глядач');
} else if (personalMovieDB.count >= 30) {
    console.log('Ви кіноман');
} else {
    console.log('Помилка');
}



console.log(personalMovieDB);



