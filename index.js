require('dotenv').config()

const express = require("express");
const Router = require("./src/routers/router");

const app = express();

app.listen(process.env.PORT, () => {
    console.log("succes run", process.env.PORT);
})

// middleware body parsing
const jsonParser = express.json();
const urlEncodedParser = express.urlencoded();

app.use(jsonParser);
app.use(urlEncodedParser);

app.use(Router);