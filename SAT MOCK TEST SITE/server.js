const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname,'/public')));
app.use(express.static(path.join(__dirname,'/public/login page')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/login page', 'login.html'))
});

const PORT  = `https://cerulean-youtiao-774227.netlify.app` || 2022;

app.listen(PORT);
// () => console.log(`Server is running on port ${PORT}`)