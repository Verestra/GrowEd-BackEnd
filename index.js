require('dotenv').config()

const express = require("express");
const Router = require("./src/routers/router");

const app = express();

app.listen(process.env.PORT, () => {
    console.log("succes run", process.env.PORT);
})

// middleware body parsing
const jsonParser = express.json();
const urlEncodedParser = express.urlencoded({
    extended : false
});

app.use(jsonParser);
app.use(urlEncodedParser);

const cors = require('cors');

app.use(cors());
let publicDir = require('path').join(__dirname,'/public'); 
app.use(express.static(publicDir)); 

app.use(Router);

