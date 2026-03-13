import { SistemaOrdenes } from "./core/SistemaOrdenes"
import { AdaptadorPago } from "./adapters/AdaptadorPago"
import { AdaptadorSegundoProveedor } from "./adapters/AdaptadorSegundoProovedor"

console.log("=== PROVEEDOR 1 ===")

const sistema1 = new SistemaOrdenes(new AdaptadorPago())

console.log(
  sistema1.crearOrden("cliente1", 100)
)

console.log("=== PROVEEDOR 2 ===")

const sistema2 = new SistemaOrdenes(
  new AdaptadorSegundoProveedor()
)

console.log(
  sistema2.crearOrden("cliente2", 200)
)