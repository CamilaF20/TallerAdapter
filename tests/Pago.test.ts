import { SistemaOrdenes } from "../src/core/SistemaOrdenes"
import { AdaptadorPago } from "../src/adapters/AdaptadorPago"

describe("Pruebas del sistema de pagos", () => {

  test("Procesa pagos correctamente", () => {

    const sistema = new SistemaOrdenes(
      new AdaptadorPago()
    )

    const resultado = sistema.crearOrden(
      "cliente1",
      100
    )

    expect(resultado.ordenCreada).toBe(true)

  })

})