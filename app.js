let numer1;
numer1 = 2;

let arreglo=[];


for (let i = 0; i < 9; i++) {
    arreglo=[i];
    console.log(arreglo[i]);
}


//llamando la funcion
function saludar(nombre){
    console.log(`Esto ${nombre} es una prueba` );
}
saludar("yorlady");


//retornando el valor de la funcion
function saludar2(nombre){
    return `Esto ${nombre} es una prueba`;
}
let resultado = saludar("alba");
console.log(resultado);

//funciones anonimas

function (nombre){
    return `Esto ${nombre} es una prueba`;
}