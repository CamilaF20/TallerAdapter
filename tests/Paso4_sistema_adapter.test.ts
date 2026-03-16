import { SistemaOrdenes } from "../src/core/SistemaOrdenes";
import { AdaptadorPago } from "../src/adapters/AdaptadorPago";

describe("Paso 4 - Sistema usando adaptador", () => {

  test("El sistema debe crear una orden y procesar pago usando el adaptador", () => {

    const sistema = new SistemaOrdenes(
      new AdaptadorPago()
    );

    const resultado = sistema.crearOrden("cliente4", 150);

    expect(resultado.ordenCreada).toBe(true);

    expect(resultado.pago.estado).toBe("OK");

  });

});