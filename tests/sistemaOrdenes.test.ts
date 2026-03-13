import { SistemaOrdenes } from "../src/core/SistemaOrdenes"
import { AdaptadorPago } from "../src/adapters/AdaptadorPago"

describe("SistemaOrdenes con AdaptadorPago", () => {

  test("Debe crear una orden y procesar el pago", () => {

    const sistema = new SistemaOrdenes(
      new AdaptadorPago()
    )

    const resultado = sistema.crearOrden("cliente1", 100)

    expect(resultado.ordenCreada).toBe(true)

    expect(resultado.pago.estado).toBe("OK")

    expect(resultado.pago.codigoAutorizacion)
      .toBeDefined()

  })

})