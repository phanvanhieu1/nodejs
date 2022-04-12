const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const authorRoute = require('./routes/author');
const db = require('./config/db');
const motorRoute=require('./routes/motor');
//connect
// mongoose.connect("mongodb+srv://phanvanhieu:<phanvanhieu>@cluster0.tmony.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", () => {
//     console.log("Connected to database")    
// });
db.connect();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
app.use(morgan('common'));


// ROUTES
app.use("/author", authorRoute);
app.use("/motor",motorRoute);
app.get('/api',(req,res)=>{
    res.status(200).json('Hello World');
    });


const PORT=process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});
