import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//connect to the database
db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(error => console.log(error));

//define the port
const port = process.env.PORT || 3000;

//enable pug
app.set('view engine', 'pug');

//get year current
app.use(( req, res, next ) => {
    res.locals.currentYear = new Date().getFullYear();
    res.locals.nameSite = "Agencia de Viajes";
    return next(); 
});

//add body parser for read data form
app.use(express.urlencoded({extended: true}));

//define the file public as static
app.use(express.static('public'));

//add the router
app.use('/', router);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})