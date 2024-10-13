////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Comparacion Estricta - Valor del descuento 
// Por medio de un objeto se determinara el valor de cada producto donde su diferencia va hacer el de la cantidad de descuento 
let productosFarmacia = [
    { nombre: "Crema Facial", descuento: "30" }, // Como string
    { nombre: "Refil Neutragena", descuento: 30 },  // Como número
  ];
//Condicional por medio de una funcion flecha se evalua el tipo de valor de la variable descuento 
// Donde estrictaamente tiene que ser igual al condicional a 30 
  productosFarmacia.forEach(producto => {
    if (producto.descuento === 30) {
      console.log(`${producto.nombre} tiene un descuento del 30%`);
    } else {
      console.log(`${producto.nombre} tiene un descuento distinto.`);
    }
  });
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////