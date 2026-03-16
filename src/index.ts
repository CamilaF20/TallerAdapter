import { SistemaOrdenes } from "./core/SistemaOrdenes";
import { AdaptadorPago } from "./adapters/AdaptadorPago";
import { AdaptadorSegundoProveedor } from "./adapters/AdaptadorSegundoProovedor";

console.log("===== DEMOSTRACIÓN PATRÓN ADAPTER =====");

console.log("\nPaso 4: Sistema usando AdaptadorPago");

const sistema1 = new SistemaOrdenes(
  new AdaptadorPago()
);

const orden1 = sistema1.crearOrden("cliente1", 100);

console.log("Orden creada:", orden1);

console.log("\nPaso 5: Usando segundo proveedor");

const sistema2 = new SistemaOrdenes(
  new AdaptadorSegundoProveedor()
);

const orden2 = sistema2.crearOrden("cliente2", 200);

console.log("Orden creada:", orden2);

console.log("\nPaso 6: Cambio de proveedor sin modificar el sistema");

const orden3 = sistema1.crearOrden("cliente3", 300);
const orden4 = sistema2.crearOrden("cliente4", 400);

console.log("Proveedor 1:", orden3);
console.log("Proveedor 2:", orden4);