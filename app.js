require("dotenv").config()
const express = require("express");
const app = express();
const mongoose = require("mongoose")
// mongoose.connect('mongodb://127.0.0.1/formfill');
mongoose
    .connect(process.env.DATABASE,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("DB CONNECTED")
    });
const port = process.env.PORT ||4000;

app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

app.set('view engine', 'pug') // Set the template engine as pug

// app.set('views', path.join(__dirname, 'views')) // Set the views directory
const locviews =__dirname +'/views/'
const params = {}
app.get('/', (req, res) => {
    res.status(200).render(locviews+'home.pug', params);
})
app.get('/contact', (req, res) => {
    res.status(200).render(locviews+'contact.pug', params);
})

// app.set('views', path.join(__dirname, 'views/item')) // Set the views directory
//items
app.get('/item1', (req, res) => {
    res.status(200).render(locviews+'item/item1.pug', params);
})
app.get('/item2', (req, res) => {
    res.status(200).render(locviews+'item/item2.pug', params);
})
app.get('/item3', (req, res) => {
    res.status(200).render(locviews+'item/item3.pug', params);
})
app.get('/item4', (req, res) => {
    res.status(200).render(locviews+'item/item4.pug', params);
})
app.get('/item5', (req, res) => {
    res.status(200).render(locviews+'item/item5.pug', params);
})

const contactSchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    about: String
});
const Contact = mongoose.model('contact', contactSchema);

app.post('/contact', async(req, res) => {
    const myData = new Contact(req.body);
    const result =await myData.save()
    res.render('contactthank.pug', params)
})

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});