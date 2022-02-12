const express = require('express');

const apiRoutes = require('./routes/apiRoutes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Now listening on ${PORT}`)
})