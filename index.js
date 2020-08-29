const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const { getTwoArgsOperation, getOneArgOperation } = require("./operations");

const app = express();
app.use(bodyParser.json());

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname + '/index.html'));
})

app.post("/two-args", function(request, response) {
    const { firstArg, secondArg, operation } = request.body;
    try {
        response
            .status(200)
            .json(getTwoArgsOperation(operation)(firstArg, secondArg));
    } catch (e) {
        response.status(400).json(e.message);
    }
});

app.post("/one-arg", function(request, response) {
    const { firstArg, operation } = request.body;
    try {
        response
            .status(200)
            .json(getOneArgOperation(operation)(firstArg));
    } catch (e) {
        response.status(400).json(e.message);
    }
});

module.exports = app;