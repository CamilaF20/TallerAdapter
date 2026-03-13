export class SegundoProveedorPago {

  pay(client: string, value: number) {

    return {
      status: "SUCCESS",
      authorization: "XYZ999"
    }

  }

}