////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Función de contención de retorno, de argumento y de tipo expresada 
// Función expresada para calcular el total de la compra
const calculoTotal = function(subtotal, discount = 0) {
    let total = subtotal - (subtotal * discount / 100);
    return total;
  };
  
  let subtotalCompra = 74.38; // valor ficticio
  let descuentoAplicado = 10; // 10% de descuento
  
  // Invocación de la función con y sin argumentos opcionales
  let totalConDescuento = calculoTotal(subtotalCompra, descuentoAplicado);
  let totalSinDescuento = calculoTotal(subtotalCompra);
  
  console.log(`Total con descuento: $${totalConDescuento}`);
  console.log(`Total sin descuento: $${totalSinDescuento}`);
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////