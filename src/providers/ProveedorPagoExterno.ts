export default class ProveedorPagoExterno {

  executeTransaction(user: string, amount: number, currency: string) {

    return {
      resultCode: "OK",
      authId: "AUTH12345",
      timestamp: Date.now()
    }

  }

}