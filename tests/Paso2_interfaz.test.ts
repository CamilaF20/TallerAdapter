import { AdaptadorPago } from "../src/adapters/AdaptadorPago";

describe("Paso 2 - Interfaz ServicioPago", () => {

  test("El adaptador debe procesar el pago usando la interfaz", () => {

    const adaptador = new AdaptadorPago();

    const resultado = adaptador.procesarPago("cliente2", 200);

    expect(resultado.estado).toBe("OK");

    expect(resultado.codigoAutorizacion).toBeDefined();

  });

});