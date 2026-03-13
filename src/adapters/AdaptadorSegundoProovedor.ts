import { ServicioPago } from "../interfaces/ServicioPago"
import { SegundoProveedorPago } from "../providers/SegundoProveedorPago"

export class AdaptadorSegundoProveedor implements ServicioPago {

  private proveedor = new SegundoProveedorPago()

  procesarPago(clienteId: string, monto: number) {

    const r = this.proveedor.pay(clienteId, monto)

    return {
      estado: r.status,
      codigoAutorizacion: r.authorization
    }

  }

}