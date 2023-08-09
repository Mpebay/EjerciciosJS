/*1. Realizar un programa que permita el ingreso de un número y muestre su tabla de
multiplicar (Los primeros 10 múltiplos). */
//for (let i = 1; i <= 10; i++) {
  //  console.log(`2*${i} = ${2*i}`);
//}
/*2. Realizar un programa que permita el ingreso de números los cuales se tienen que ir
 acumulando. El ingreso de datos terminará cuando el usuario ingrese un valor 0. */
 /*   let numero = 0;
    let numeroIngresado = 0;
 do{
    numeroIngresado = Number(prompt("ingrese un número"))
    numero = numero + numeroIngresado
 } while (numeroIngresado != 0 )
 console.log(numero);

 /*3. Guarda el número final del ejercicio N°2 en una variable, el mismo deberá estar en un
rango entre 1 - 100. La persona deberá poder ingresar números hasta adivinar el valor
guardado en dicha variable. Si el valor ingresado es mayor al número secreto, avisarle
al usuario, lo mismo si el valor es menor. Así sucesivamente hasta que el usuario
adivine el número secreto. Por último mostrar un mensaje de felicitaciones y decirle en
cuantos intentos lo ha realizado. */

/*let i = 0
let numeroIngresado2 = 0
do{
    numeroIngresado2 = Number(prompt("Adivina el número"))
    if(numeroIngresado2>numero){
        numeroIngresado2=Number(prompt("Número ingresado es mayor al número. Ingrese otro número"))
        i++
    } else if (numeroIngresado2<numero){
        numeroIngresado2=Number(prompt("Número ingresado es menor al número. Ingrese otro número"))
        i++
    }
    i++
}
while (numeroIngresado2 != numero)

alert(`Felicitaciones, el número ingresado es el correcto. Lo realizaste en ${i} intento(s)`)

/*4.Realizar un programa que reciba un número y muestre de alguna forma todos sus
divisores. */


 /*let numeroRecibido = Number(prompt("Ingresa un número"));
 let a = 1;
do { 
    if ((numeroRecibido % a) === 0){
        console.log(a)
    }
    a++
    
}while (a <= numeroRecibido);*/

/*5. Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre
 un mensaje por consola con cada uno de los elementos del array.*/
/* let cohort50 = ["Manuel","Sofía","Naza", "Miguel", "Guada", "Benjamín", "Abel", "Juan", "Benja", "Felipe"];
 for (const cohort of cohort50) {
    console.log(`Los alumnos del cohort50 son: ${cohort}`);
 }

 /*6. Dado un array de 10 números, realizar un programa que muestre por consola el doble
de cada uno de los elementos. */

/*let arrayNumeros = [1,2,3,4,5,6,7,8,9,10]
for (const numeros of arrayNumeros) {
    console.log(`${numeros*2}`)
}

/*7. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que
muestre un mensaje de presentación por cada elemento del array. */
/*let familia = [
    {
        nombre: "Miguel",
        edad: 50,
        nacionalidad: "argentina",
        mascota: true
    },
    {
        nombre: "María",
        edad: 49,
        nacionalidad: "argentina",
        mascota: true
    },
    {   
        nombre: "Antonella",
        edad: 15,
        nacionalidad: "argentina",
        mascota: true
    },
    {
        nombre: "Manuel",
        edad: 25,
        nacionalidad: "argentina",
        mascota: true
    },
    {
        nombre: "Segundo",
        edad: 3,
        nacionalidad: "argentina",
        mascota: true
    }
]

for (const familiar of familia) {
    console.log(`Hola, soy ${familiar.nombre}, tengo ${familiar.edad} años, soy de nacionalidad ${familiar.nacionalidad} y tengo mascota ${familiar.mascota}`)
}

/*8. Dado un array de 10 números, realizar un programa que recorra el array y solo muestre
los números impares. */

/*let numerosImpares =[1,2,3,4,5,6,7,8,9,10,11,12,13]
for (let i = 1; i <= numerosImpares.length; i+=2) {
    console.log(i)
}

/*9. Realizar un programa que permita la entrada de números y calcule la suma de los
números pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el
usuario ingresa un 0. */
/*let sumaNumerosPares = 0
let sumaNumerosImpares = 0

let solicitarNumero = [11, 24, 65, 22, 58, 47, 14, 18, 7];
for (let i = 0; i < solicitarNumero.length; i++) {
    if(solicitarNumero[i]%2 === 0){
        sumaNumerosPares += solicitarNumero[i]
        
    } else if (solicitarNumero[i] %2 !== 0) {
        sumaNumerosImpares += solicitarNumero[i]
    }
    
}
console.log(sumaNumerosPares)
console.log(sumaNumerosImpares)

/*10*. Dado un array de 10 números, realizar un programa que imprima por pantalla el
número más grande.*/



/*let solicitarNumero2 = [11, 24, 65, 22, 58, 47, 14, 18, 7];
let numeroMasGrande = 0;
for (let i = 0; i < solicitarNumero2.length; i++) {
    if (solicitarNumero2[i] > numeroMasGrande) {
        numeroMasGrande = solicitarNumero2[i];
    }
}
console.log(numeroMasGrande)/*