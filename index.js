const express = require("express")

const app = express()   //sukuriam instance

app.get("/", (req, res) => {
    res.send("OK");
});

app.get("/cars", (req, res) => {
    const car = ['BMW', 'Lexus', 'Nissan']
    res.send(cars);
});

app.listen(3000, () => console.log())