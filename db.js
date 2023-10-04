const Sequelize = require('sequelize');

const directorModel = require('./models/director');
const genreModel = require('./models/genre')
const movieModel = require('./models/movie');

/*
    1) Nombre base de datos
    2) Usuario base de datos
    3) Contraseña base de datos
    4) Objeto de configuracion ORM
*/

const sequelize = new Sequelize('videoclub', 'root', 'uwu', {
    host: 'localhost',
    dialect: 'mysql'
});

const Director = directorModel(sequelize, Sequelize);
const Genre = genreModel(sequelize, Sequelize);
const Movie = movieModel(sequelize, Sequelize);

// Un genero puede tener muchas peliculas
Genre.hasMany(Movie, {as:'movies'});

// Un pelicula tiene un genero
Movie.belongsTo(Genre, {as:'genre'});

// Un director puede tener muchas peliculas
Director.hasMany(Movie, {as:'movies'});

// Una pelicula tiene un director
Movie.belongsTo(Director, {as: 'director'})

sequelize.sync({ // Solo para el desarrollo
    force: true
}).then(() => {
    console.log('Base de datos sincronizada');
});

module.exports = { Director , Genre  , Movie};