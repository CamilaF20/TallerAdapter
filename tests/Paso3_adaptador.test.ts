import { AdaptadorPago } from "../src/adapters/AdaptadorPago";

describe("Paso 3 - Adaptador", () => {

  test("Debe traducir la llamada al proveedor externo", () => {

    const adaptador = new AdaptadorPago();

    const pago = adaptador.procesarPago("cliente3", 300);

    expect(pago).toHaveProperty("estado");

    expect(pago).toHaveProperty("codigoAutorizacion");

  });

});