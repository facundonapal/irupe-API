/**
 * we need to use the Router function,
 * for that I import express and use his statics methods
 * there we can find the Router function
 */
const express = require('express');
const Router = express.Router;

/**
 * Just as examples of what we can do with es6 features
 * to get the same result using destructuring feature
 * ref: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
 *
 * const { Router } = require('express');
 */


/**
 * Create a router called "home"
 */
const home = Router();


/**
 * Here I put a callback to handle the request
 * first parameter is the route, the second one is just the callback
 * and receive injected two objects
 * Request: req - https://expressjs.com/es/api.html#req
 * Response: res - https://expressjs.com/es/api.html#res
 */
home.get('/', (req, res) => {
    res.render('home', {
        title: 'Irupe home page',
        layout: 'index'
    })
});


/**
 * export the router in order to use it other modules
 */
module.exports = home;
