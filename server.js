const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let pedidos = [];

app.post("/pedido", (req, res) => {
    const pedido = req.body;
    pedidos.push(pedido);
    console.log("☕ Nuevo pedido:", pedido);
    res.json({ mensaje: "Pedido recibido" });
});

app.get("/pedidos", (req, res) => {
    res.json(pedidos);
});

app.listen(3000, () => {
    console.log("🚀 Servidor activo en http://localhost:3000");
});
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(bodyParser.json());
const path = require("path");

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
