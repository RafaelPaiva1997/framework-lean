// Libraries
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Modules
const libs = require('./functionals/libs');
const files = libs.files();
const handlers = libs.handlers(files);

// Config
const CONFIG = require("./config.json");

// App
var app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.post("/api", function (req, res) {
    try {
        var handler = handlers[req.body.lib][req.body.action];

        if (handler)
            handler(req, res);
        else
            res.sendStatus(404);
    } catch (Exception) {
        res.send(Exception).status(400);
    }
});

app.listen(CONFIG.port, CONFIG.address, function () {
    console.log("Listening on " + CONFIG.address + ", port " + CONFIG.port);
});