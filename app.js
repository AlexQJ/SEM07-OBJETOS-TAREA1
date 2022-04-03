/* *
    TODO 1: Eliminar un elemento de un array, dado un índice.

    *eliminarIndice([1,2,3,4,5], 2) // [1,2,4,5]
    
    TODO 2: Determinar si un elemento existe dentro de un array.
    *busquedaArray([1, ‘hola’, ‘adiós’, 4, 100], ‘hola’) // Se encontró el elemento

    TODO 3: Crear un arreglo con objetos y determinar si existe un valor determinado en las propiedades de los objetos.

    *let infoLibros = [
    *    { titulo: “El Quijote”, autor: “Miguel C.” },
    *    { titulo: “Señor de las moscas”, autor: “William G.” },
    *]

    *busquedaObjeto(infoLibros, “Miguel C.”) //Se encontró el elemento
    *busquedaObjeto(infoLibros, “H. G. Wells”) //No se encontró el elemento
*/
let separador = '-------------------------------------------------------------\n';
// TODO 1:
// * Hecho
let array1 = [1,2,3,4,5,6,7,8,9,10,11,12];              // Definir arreglo


function eliminarIndice(indice, array){                 // recibir 2 parametros. El indice a eliminar y de donde.
    return array.splice(indice, 1)                       // Eliminar el elemento seleccionado   
}

eliminarIndice(2, array1);                              // mandar ejecutar la funcion 
console.log(array1);                                    // Mostrar el arreglo sin el elemento eliminado
console.log(separador);



// TODO 2:
// * Hecho
let array2 = [1, "hola", "adiós", 4, 100];

function buscarArray(array, busqueda){
    let isTrue = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === busqueda){
            isTrue++;
        }
    }

    if(isTrue > 0){
        return `Elemento: ${busqueda}; encontrado. ` + true;
    }else{
        return `Elemento: ${busqueda}; no encontrado. ` + false;
    }
}


console.log(buscarArray(array2, 5));
console.log(separador);

// TODO 3:
// * Hecho

let infoLibros = [
    { titulo: "El Quijote", autor: "Miguel C." },
    { titulo: "Señor de las moscas", autor: "William G." },
]

// Definir una funcion para buscar en el titulo
function busquedaLibro(array, titulo){
    let existeLibro = 0;
   array.forEach(function (libro){
       if(libro.titulo.toLowerCase() === titulo.toLowerCase()){
           existeLibro++;
       }

   });
   if(existeLibro > 0){
        return true;
   }else{
       return false;
   }
    
}

// Definir una funcion para buscar en el autor
function busquedaAutor(array, autor){
    let existeLibro = 0;
   array.forEach(function (libro){
       if(libro.autor.toLowerCase() === autor.toLowerCase()){
           existeLibro++;
       }

   });
   if(existeLibro > 0){
       return true;
   }else{
       return false;
   }
    
}

// Definir una funcion que ejecute las 2 funciones anteriores para enonctrar el elemento en cualquier propiedad del objeto

function busquedaObjeto(array, objeto){
   if( busquedaLibro(array, objeto)){
       return 'Se encontro el objeto en el titulo del libro'
   }
   if(busquedaAutor(array, objeto)){
    return 'Se encontro el objeto en el autor del libro'
   }
   else{
       return 'No se encontro el objeto buscado.'
   }
}


console.log(busquedaObjeto(infoLibros, 'El quijote'));
console.log(busquedaObjeto(infoLibros, 'Miguel C.'));


    //*busquedaObjeto(infoLibros, “Miguel C.”) //Se encontró el elemento
    //*busquedaObjeto(infoLibros, “H. G. Wells”) //No se encontró el elemento