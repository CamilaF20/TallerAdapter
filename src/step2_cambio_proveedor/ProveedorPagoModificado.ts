export class ProveedorPagoModificado {

  makePayment(customer: string, value: number) {

    return {
      status: "OK",
      authorizationCode: "NEW123"
    }

  }

}