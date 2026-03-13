import { ServicioPago } from "../interfaces/ServicioPago"

export class SistemaOrdenes {

  constructor(private servicioPago: ServicioPago) {}

  crearOrden(clienteId: string, monto: number) {

    const pago = this.servicioPago.procesarPago(clienteId, monto)

    return {
      ordenCreada: true,
      pago
    }

  }

}