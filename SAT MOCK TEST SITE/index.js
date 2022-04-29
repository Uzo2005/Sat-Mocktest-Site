const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname,'/public')));
app.use(express.static(path.join(__dirname,'/public/login page')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/login page', 'index.html'))
});

// const PORT  = process.env.PORT || 2022;

// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
