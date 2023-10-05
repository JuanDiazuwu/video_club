const express = require('express');
const { Movie } = require('../db');

function create(req, res, next){
    const title = req.body.title;
    const genreId = req.body.genreId;
    const directorId = req.body.directorId;

    Movie.create({
        title: title,
        genreId: genreId,
        directorId: directorId
    }).then(object => res.json(object))
    .catch(err => res.send(err));
}

function list(req, res, next) {
    Movie.findAll({include:['genre', 'director']}) // Criterios SQL
        .then(objects => res.json(objects))
        .catch(err => res.send(err));
}

function index(req, res, next){
    res.send('Users index')
}

function replace(req, res, next){
    res.send('Users replace')
}

function update(req, res, next){
    res.send('Users update')
}

function destroy(req, res, next){
    res.send('Users destroy')
}

module.exports = {
    create, list, index, replace, update, destroy
};