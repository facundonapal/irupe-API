const fs = require('fs');
const formidable = require('formidable');
const express = require('express');
const Router = express.Router;
const manage = Router();


manage.get('/', (req, res) => {
    res.render('manage', {
        title: 'Irupe home page',
        layout: 'index'
    })
});

manage.post('/product-upload', (req, res) => {
    const { body } = req;
    console.log(body);
    
    const form = formidable({ multiples: true });
    
    form.parse(req, (err, fields, files) => {
        
        console.log(fields, files)
        res.redirect('/');
    });
    
});


/**
 * export the router in order to use it other modules
 */
module.exports = manage;
