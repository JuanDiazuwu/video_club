const express = require('express');
const { Director } = require('../db');

function create(req, res, next){
    const name = req.body.name;
    const lastName = req.body.lastName;
    Director.create({
        name: name, 
        lastName: lastName
    }).then(object => res.json(object))
    .catch(err => res.send(err));
}

function list(req, res, next) {
    Director.findAll()
    .then(objects => res.json(objects))
    .catch(err => res.send(err));
}

function index(req, res, next){
    res.send('Director index')
}

function replace(req, res, next){
    res.send('Director replace')
}

function update(req, res, next){
    res.send('Director update')
}

function destroy(req, res, next){
    res.send('Director destroy')
}

module.exports = {
    create, list, index, replace, update, destroy
};