//Crear una aplicación que muestre un cuadrado de color gris. Debajo deberá
//haber un botón que diga “Cambiar”, al hacer click sobre el botón, el color de relleno
//del cuadrado deberá cambiar a celeste.


const cuadrado = document.getElementById("cuadrado")
const boton = document.getElementById("btn")

boton.addEventListener("click", camabiarCuadradoColor)

function camabiarCuadradoColor(){
        cuadrado.style.backgroundColor = "lightblue"
        return camabiarCuadradoColor 
    }
    

//Crear una aplicación que muestre un cuadrado de color gris. Debajo deberá
//haber un input de texto, al escribir en el input de texto, los que se esté escribiendo
//deberá aparecer impreso dentro del cuadrado.

const cuadrado2 = document.getElementById("cuadrado2")
const input = document.getElementById("input")
input.addEventListener("keyup", escribir)
function escribir(){
    cuadrado2.textContent = input.value
    return escribir
    }

//Crear una aplicación que calcule el índice de masa corporal, al presionar el
//botón “calcular” deberá mostrar el resultado en el input correspondiente.

const estatura = document.getElementById("estatura")
const peso = document.getElementById("peso")
const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

calcular.addEventListener("click", resultadoFinal)

function resultadoFinal(){
    let resultadoMasa = (peso.value / (estatura.value ** 2))
    resultado.value = resultadoMasa 
    
    return resultadoFinal
    
}

//Crear una aplicación de conversión de divisa. Deberá tener los valores por
//defecto, por ejemplo 1 dólar = 500 pesos ( valor de ejemplo ), y al hacer algún cambio
//en alguno de los inputs se deberá ver reflejado su correspondiente valor en la
//moneda a convertir.

const pesoArgentino = document.getElementById("pesoArgentino")
const dolar = document.getElementById("dolar")

dolar.addEventListener("keyup", convertir)
pesoArgentino.addEventListener("keyup", convertir2)
let valordolar = 1
let valorPeso = 500

function convertir(){
    pesoArgentino.value = dolar.value * valorPeso
    
}

function convertir2(){
    dolar.value = pesoArgentino.value / valorPeso
    
}