import { SistemaOrdenesAcoplado } from "../src/step1_acoplado/SistemaOrdenesAcoplado";

describe("Paso 1 - Sistema acoplado", () => {

  test("Debe crear una orden y procesar el pago directamente con el proveedor", () => {

    const sistema = new SistemaOrdenesAcoplado();

    const resultado = sistema.crearOrden("cliente1", 100);

    expect(resultado.ordenCreada).toBe(true);

    expect(resultado.estado).toBe("OK");

    expect(resultado.codigoAutorizacion).toBeDefined();

  });

});