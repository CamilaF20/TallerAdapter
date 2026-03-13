import { ServicioPago } from "../interfaces/ServicioPago"
import  ProveedorPagoExterno  from "../providers/ProveedorPagoExterno"

export class AdaptadorPago implements ServicioPago {

  private proveedor = new ProveedorPagoExterno()

  procesarPago(clienteId: string, monto: number) {

    const r = this.proveedor.executeTransaction(
      clienteId,
      monto,
      "USD"
    )

    return {
      estado: r.resultCode,
      codigoAutorizacion: r.authId
    }

  }

}