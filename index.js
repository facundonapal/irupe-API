const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');

const home = require('./routes/home');
const manage = require('./routes/manage');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.engine('hbs', hbs({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts',
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(home);
app.use('/manage', manage);

app.set('port', process.env.PORT || 8888);

app.listen( app.get('port'), () => {
    console.log('App running at port ', app.get('port'))
});