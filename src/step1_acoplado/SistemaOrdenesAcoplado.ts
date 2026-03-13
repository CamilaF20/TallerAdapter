import  ProveedorPagoExterno  from "../providers/ProveedorPagoExterno"

export class SistemaOrdenesAcoplado {

  private proveedor = new ProveedorPagoExterno()

  crearOrden(clienteId: string, monto: number) {

    const respuesta = this.proveedor.executeTransaction(
      clienteId,
      monto,
      "USD"
    )

    return {
      ordenCreada: true,
      estado: respuesta.resultCode,
      codigoAutorizacion: respuesta.authId
    }

  }

}