export interface ServicioPago {

  procesarPago(clienteId: string, monto: number): {
    estado: string
    codigoAutorizacion: string
  }

}