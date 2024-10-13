////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Funcion declarada - Determinar el descuento de las categorias 
function aplicacionCategoriaDes(categoria) {
    if (categoria === "Cuidado Personal") {
        return 30;
    } else if (categoria === "belleza") {
        return 15;
    }
    return 0;
  }
  let DescuentoCuidadoPersonal = aplicacionCategoriaDes("Cuidado Personal"); 
  console.log(`Descuento adicional: ${DescuentoCuidadoPersonal}%`);
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////