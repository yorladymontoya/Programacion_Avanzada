/*
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
*/
//Arreglos - consultar some y every
/*
let myArray=[];
myArray.push("yorlady");//push agrega al final del arreglo
myArray.push("juan");
myArray.push("jose");
myArray.push("carlos");
myArray.push("juan");
//myArray.pop("juan");//pop borra el valor que uno le de
myArray[1]="Diana";//Reemplaar lo que hay en la posicion [1] por el valor dado


for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]); 
}

for (i of myArray){
    console.log(i);
}
*/
/*
myArray=[2,3,4];
myArray.forEach(function (i) { //Forma tradicional de llamar una funcion
    console.log(i*i);
});

myArray=[2,3,4];
myArray.forEach((i)=>{//Se quita la palabra funcion y se agrega la flecha despues del parentesis
    console.log(i*i);
})
*/

/*
let names=["pedro", "camila", "pablo", "maria"];
let ages=[17,21,45,19];

const getName=(age)=>{
    let index = 0;
    for (let i = 0; i < ages.length; i++) {
        if(ages[i]==age){
            index=i;
            break;
        }
        
    }
    return names[index];
}
console.log(getName(19))
*/
/*
let myArray=[1,3,5,7];
let data = myArray.map((i)=>{
    return i*2;
});
//let newArray = data;
console.log(data);
*/
let data = myArray.filter((i)=>{
    if(i%2 !=0){
      return i;
}

});
console.log(data);