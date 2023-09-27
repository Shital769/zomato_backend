const express = require('express');     // inserted the express package
const mongoose = require('mongoose');    // DB Package
const bodyParser = require('body-parser'); // Body Parser (package): Accessing the POST Method

const routes = require('./Routes/index');

const app = express();                  // assigning the express component in app variable

app.use(bodyParser.json()); 
app.use('/', routes);                   // If any requests are made it redirects to routes.

const port = 5500;
const hostname = 'localhost';

// Database Connection (MongoDB)
// try_21
// CdhZdeEiW81xd1eu

const dbUrl = 'mongodb://127.0.0.1:27017/zomato-78';    // mongodb Shell Connection
const atlasDbUrl = 'mongodb+srv://try_21:CdhZdeEiW81xd1eu@cluster0.xwpmebe.mongodb.net/zomato_78?retryWrites=true&w=majority'  // MongoDb Atlas
// mongodb+srv://<username>:<password>@cluster0.xwpmebe.mongodb.net/<DB_Name>?retryWrites=true&w=majority

mongoose.connect(atlasDbUrl,{useNewUrlParser: true, useUnifiedTopology: true})

.then (res => {
    app.listen(port, hostname, () => {
        console.log(`Server is running at ${hostname}: ${port}`);
    });
})
.catch(err => console.log(err));
