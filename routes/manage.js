const path = require('path');
const ImageSaver = require('../services/ImageSaver');
const formidable = require('formidable');
const express = require('express');
const Router = express.Router;
const manage = Router();


manage.get('/', (req, res) => {
    res.render('manage', {
        title: 'Manager of products',
        layout: 'index'
    })
});

manage.post('/product-upload', (req, res) => {
    const imageSaver = new ImageSaver(path.resolve('.', 'src/photos'));
    const form = formidable();
    
    form.parse(req, (err, fields, files) => {
        const { imageHigh, imageLow } = files;
        imageSaver.save(imageHigh);
        imageLow && imageSaver.save(imageLow);
    
    
        res.redirect('/');
    });
    
});


/**
 * export the router in order to use it other modules
 */
module.exports = manage;
