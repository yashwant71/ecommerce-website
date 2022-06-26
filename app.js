const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
var mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1/formfill');
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug

// ENDPOINTS
app.get('/', (req, res) => {
    app.set('views', path.join(__dirname, 'views')) // Set the views directory
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res) => {
    app.set('views', path.join(__dirname, 'views')) // Set the views directory
    const params = {}
    res.status(200).render('contact.pug', params);
})

//items
app.get('/item1', (req, res) => {
    app.set('views', path.join(__dirname, 'views/item')) // Set the views directory
    const params = {}
    res.status(200).render('item1.pug', params);
})
app.get('/item2', (req, res) => {
    app.set('views', path.join(__dirname, 'views/item')) // Set the views directory
    const params = {}
    res.status(200).render('item2.pug', params);
})
app.get('/item3', (req, res) => {
    app.set('views', path.join(__dirname, 'views/item')) // Set the views directory
    const params = {}
    res.status(200).render('item3.pug', params);
})
app.get('/item4', (req, res) => {
    app.set('views', path.join(__dirname, 'views/item')) // Set the views directory
    const params = {}
    res.status(200).render('item4.pug', params);
})
app.get('/item5', (req, res) => {
    app.set('views', path.join(__dirname, 'views/item')) // Set the views directory
    const params = {}
    res.status(200).render('item5.pug', params);
})







//MONGOOSE STUFF
//define schema
const contactSchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    about: String
});
//define model
const Contact = mongoose.model('contact', contactSchema);

//After compiling it into a model, we have to change the post request for the contact form. If we want this thing to be achieved with the help of express, then we have to install a module called body parser 
const bodyparser = require("body-parser");

app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        // res.send("This item has been saved to the database")
        const params = {}
        res.status(200).render('contactthank.pug', params)
    }).catch(() => {
        res.status(400).send("item was not saved to the database")
    });
})


// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);

});