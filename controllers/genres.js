const express = require('express');
const { Genre } = require('../db')
// actores y socios 
function create(req, res, next){
    const description = req.body.description;
    const status = req.body.status;
    Genre.create({
        description : description, 
        status : status
    }).then(object => res.json(object))
    .catch(err => res.send(err));
}

function list(req, res, next) {
    Genre.findAll()
    .then(objects => res.json(objects))
    .catch(err => res.send(err));
}

function index(req, res, next){
    const id = req.params.id;
    Genre.findByPk(id)
        .then(object => res.json(object))
        .catch(err => res.send(err));
}

function replace(req, res, next){
    const id = req.params.id;
    Genre.findByPk(id)  
        .then(object => {
            const description = req.body.description ? req.body.description : "";
            const status = req.body.status ? req.body.status : false;
            objecto.update({
                description : description,
                status : status
            }).then(obj => res.json(obj))
                .catch(err => res.send(err));
        }).catch(err => res.send(err));
}

function update(req, res, next){
    const id = req.params.id;
    Genre.findByPk(id)  
        .then(object => {
            const description = req.body.description ? req.body.description : object.description;
            const status = req.body.status ? req.body.status : object.status;
            objecto.update({
                description : description,
                status : status
            }).then(obj => res.json(obj))
                .catch(err => res.send(err));
        }).catch(err => res.send(err));
}

function destroy(req, res, next){
    const id = req.params.id;
    Genre.destroy({ where: {id : id} })
        .then(obj => res.json(obj))
        .catch(err => res.send(err));
}

module.exports = {
    create, list, index, replace, update, destroy
};