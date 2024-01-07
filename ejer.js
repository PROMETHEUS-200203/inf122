var nombre="ezequiel";
var apellido="soruco";
const año=2024;
const mes=1;
let numero=50;
if(numero%5===0){
    console.log();

}
else{
    console.log();

}
for(let i=0;i<=10;i++){
    console.log(i);

}
for(let i=10;i>=0;i--){
    console.log(i);
}



let contador=10;

while(contador >= 0){
    console.log(contador);
    contador--;
}

let suma=5+5;
console.log(suma);
let resta=5-5;
console.log(resta);
let multiplicacion=5*5;
console.log(multiplicacion);
let division=5 / 5;
console.log(division);
let mayor= 10>5;
console.log(mayor);
//POO 
const persona={
    nombre:"Carlos",
    edad:25,
    ocupacion:"Desarrollador"
};
//array
const colores=["rojo","verde","azul"];
console.log(persona);
console.log(colores);
//cambio de nombres de la clase persona
persona.nombre= "Pedrito";
persona.edad= 25;
console.log(persona);
//se agrega otro atributo
persona["apellido"]="Perez";
console.log(persona);
persona["ci"]=12736858;persona["ci"]=12736858;
console.log(persona);
// realizo el cambio de mis datos personales
persona["ocupacion"]="estudiante";
persona.nombre="Ezequiel";
persona.apellido="Soruco";
persona.edad=20;
console.log(persona);
//imprimiendo los arrays para ver su nro de elementos
console.log(colores.length);
//accediendo
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);
// se muestra una posicion que no en nuestro array y nos mostrara indefinido 
console.log(colores[3]);
//recorremos el array
for(let i=0;i<colores.length;i++){
    console.log("Elemento:"+colores[i]+", indice:"+i);
}
//agregar  un elemento a nuestro array
colores.push("amarillo");
colores.push("rosado");
colores.push("violeta");
//lo mostramos
console.log(colores);
//invierte el array
colores.reverse();
// ordenar en orden albafetico el array
colores.sort();
colores.push("AZUL");
colores.push("NEGRO");
colores.push(1);
colores.push(2);
colores.push(3);
colores.sort();
colores.push(true);
colores.push(false);
colores.push(1.001);
colores.push("10");
colores.sort();
var elemento =colores.pop();
console.log(elemento);
console.log(colores);
colores.find("azul");