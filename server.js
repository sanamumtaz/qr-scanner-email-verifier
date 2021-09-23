var express = require("express")
var bodyParser = require("body-parser")
const dotenv = require("dotenv")

dotenv.config()
var cors = require("cors")

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

require("./backend/routes/index")(app)
app.listen(8086)
