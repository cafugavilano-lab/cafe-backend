const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Datos en memoria
let pedidos = [];

// Rutas API
app.post("/pedido", (req, res) => {
    const pedido = req.body;
    pedidos.push(pedido);
    console.log("☕ Nuevo pedido:", pedido);
    res.json({ mensaje: "Pedido recibido" });
});

app.get("/pedidos", (req, res) => {
    res.json(pedidos);
});

// Ruta principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// 🔥 PUERTO CORRECTO PARA RENDER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor activo en el puerto ${PORT}`);
});
