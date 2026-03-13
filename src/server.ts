import express from "express"
import path from "path"

import { SistemaOrdenes } from "./core/SistemaOrdenes"
import { AdaptadorPago } from "./adapters/AdaptadorPago"

const app = express()
app.use(express.json())

const servicioPago = new AdaptadorPago()
const sistema = new SistemaOrdenes(servicioPago)

app.use(express.static("views"))

app.get("/procesar", (req, res) => {

  const cliente = req.query.cliente as string
  const monto = Number(req.query.monto)

  const resultado = sistema.crearOrden(cliente, monto)

  res.json(resultado)

})

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000")
})