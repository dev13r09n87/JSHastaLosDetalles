//El ámbito de una variable es la zona del programa en donde se definen la variable
// si no estamos una funcion estamos en el ambioto global
// Toda variable en java script tiene un valor por defecto Undefined



//Al usar el let obliga al desarrollador haberla declarado previamente
let mensaje = " Hola mundo  !  Global";
console.log(mensaje);

// Delcaracion de una variable
let  mens =  "";
if  (1===1){
    // construye esa variable solamente en este ambito, no permitira definir el ciclo de vida que va a tener esa variable y nos va a obligar a declarar e inicializar la variables.  

    let  mens = "Dentro del if";
}
//Aca el mens no existe, aun que entre no la va a lograr encontrar por que ya no se encuentra en el ambito global
console.log(mens);