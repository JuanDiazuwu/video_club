const Sequelize = require('sequelize');

const directorModel = require('./models/director');

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

sequelize.sync({ // Solo para el desarrollo
    force: true
}).then(() => {
    console.log('Base de datos sincronizada');
});

module.exports = { Director };