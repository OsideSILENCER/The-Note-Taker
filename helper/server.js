const express = require("express");
const fs = require("fs");
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(__dirname));

require('./routes/routes.js')(app);

// Setup listener
app.listen(PORT, function() {
    console.log("App listening on: http://localhost" + PORT);
});  