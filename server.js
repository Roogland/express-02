const express = require('express');
const app = express();

// Set up middleware to check if the current time is within working hours
app.use((req, res, next) => {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();

    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next();
    } else {
        res.send('Sorry, the website is only available during working hours (Monday to Friday, from 9 to 17).');
    }
});

// Serve static files (CSS, images, etc.)
app.use('/public', express.static('public'));

// Home page
app.get('/', (req, res) => {
    res.render('home');
});

// Our Services page
app.get('/services', (req, res) => {
    res.render('services');
});

// Contact Us page
app.get('/contact', (req, res) => {
    res.render('contact');
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000.');
});

   
