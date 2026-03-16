import { SistemaOrdenes } from "../src/core/SistemaOrdenes";
import { AdaptadorSegundoProveedor } from "../src/adapters/AdaptadorSegundoProovedor";

describe("Paso 5 - Segundo proveedor", () => {

  test("El sistema debe funcionar con otro proveedor de pago", () => {

    const sistema = new SistemaOrdenes(
      new AdaptadorSegundoProveedor()
    );

    const resultado = sistema.crearOrden("cliente5", 500);

    expect(resultado.ordenCreada).toBe(true);

    expect(resultado.pago.estado).toBe("SUCCESS");

  });

});