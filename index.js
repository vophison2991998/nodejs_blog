var express = require("express");
var app = express();
var port = 3000
app.get("/", function(req, res) {

    return res.send("hello word");
})
app.listen(port, () => console.log("server runging 3000"))