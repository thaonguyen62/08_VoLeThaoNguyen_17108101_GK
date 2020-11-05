const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyparser = require('body-parser');

const ApiRoutes = require('./Routes/ApiRoutes');
const MainRoutes = require('./Routes/MainRoutes');

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());
app.set("view engine", "ejs");
app.set("views", "./views");

app.use('/api', ApiRoutes);
app.use('/main', MainRoutes);

server.listen(3000, () => console.log("Server is running..."));


