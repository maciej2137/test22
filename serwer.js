const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; 

app.get("/", function (req, res) {
    res.send("<h1>Maciej Czekański 3i1</h1>")
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})