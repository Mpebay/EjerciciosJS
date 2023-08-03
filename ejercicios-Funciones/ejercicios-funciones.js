//Crea una función llamada "saludar" que tome un parámetro de tipo cadena/string que
//represente un nombre, y muestre en la consola un saludo personalizado utilizando el
//nombre proporcionado. Llama a la función con tu propio nombre para verificar que
//funcione correctamente.

function saludar(nombre) {
    console.log(`Hola ${nombre}`)

}
saludar("Manuel")

//Crea una función llamada "multiplicar" que reciba dos parámetros numéricos y
//devuelva el resultado de la multiplicación de ambos. Llama a la función con dos valores 2 diferentes y muestra el resultado en la consola.

function multiplicar(numero, numero1){
    let multiplicación = (numero * numero1)
    console.log(multiplicación)
}

multiplicar(2, 4)
multiplicar(3, 2)

//Crea una función llamada "areaTriangulo" que reciba dos parámetros numéricos que
//representen la base y la altura de un triángulo, y devuelva el área del mismo. Luego,
//crea otra función llamada "perimetroTriangulo" que reciba tres parámetros numéricos
//que representen los lados de un triángulo, y devuelva el perímetro del mismo. Utiliza
//estas funciones para calcular el área y el perímetro de un triángulo con base 5 y altura
//3 y lados de 4, 5 y 6 respectivamente.

function areaTriangulo(base, altura){
    console.log(base * altura)
    return areaTriangulo
}
areaTriangulo(5, 3)

function perimetroTriangulo(lado1, lado2, lado3){
    console.log(lado1 + lado2 + lado3)
    return perimetroTriangulo
}
perimetroTriangulo(4, 5, 6)

//Crea una función llamada "calcularPrecio" que reciba dos parámetros numéricos que
//representen el precio y la cantidad de un producto, y devuelva el precio total de la
//compra. Si la cantidad de productos es mayor o igual a 10, aplica un descuento del
//10% al precio total. Si la cantidad de productos es mayor o igual a 20, aplica un
//descuento del 20% al precio total. Llama a la función con diferentes valores de precio y
//cantidad para verificar que funcione correctamente//

function calcularPrecio(precio, cantidad){
    let precioFinal = (precio * cantidad)
    
    if (cantidad >= 10 && cantidad <=19){
        console.log (precioFinal - (precioFinal * 0.10))
    }
        else if (cantidad >= 20){
        console.log (precioFinal - (precioFinal * 0.20))
    }
    else {
        console.log(precioFinal)
    }
    
}

calcularPrecio(4, 11)
calcularPrecio(2, 21)


//Crea una función llamada "esMayorDeEdad" que reciba un parámetro numérico que
//represente la edad de una persona, y devuelva un mensaje que indique si la persona
//es mayor de edad o no. Si la edad es mayor o igual a 18, el mensaje debe decir "Eres
//mayor de edad". Si la edad es menor a 18, el mensaje debe decir "Eres menor de edad".
//Utiliza el operador ternario para implementar esta función. Llama a la función con
//diferentes valores de edad para verificar que funcione correctamente.//

function esMayorDeEdad (edad){
    if (edad >= 18){
        console.log("Eres mayor de edad.")
    }
        else if (edad < 18){
            console.log("Eres menor de edad.")
        }
}
esMayorDeEdad(20)
esMayorDeEdad(15)


//Crea una función llamada "calcularImpuesto" que tome un parámetro numérico que
//represente el ingreso anual de una persona, y devuelva el impuesto que debe pagar. Si
//el ingreso es menor o igual a $10,000, el impuesto es del 10% del ingreso. Si el ingreso
//es mayor a $10,000 pero menor o igual a $20,000, el impuesto es del 15% del ingreso.
//Si el ingreso es mayor a $20,000, el impuesto es del 20% del ingreso. Utiliza
//condicionales anidados para implementar esta función. Llama a la función con
//diferentes valores de ingreso para verificar que funcione correctamente.

function calcularImpuesto (ingresoAnual){
    if(ingresoAnual <= 10000){
        console.log(ingresoAnual * 0.10)
    }
        else if (ingresoAnual > 10000 && ingresoAnual <= 20000){
            console.log(ingresoAnual * 0.15)
    }
}
calcularImpuesto(8000)
calcularImpuesto(15000)


//Crea una función llamada "verificarDia" que reciba un parámetro numérico que
//represente el número del día de la semana, y devuelva un mensaje que indique si es un
//día laboral o no. Si el número es 1, 2, 3, 4, 5, el mensaje debe decir "Es un día laboral". Si
//el número es 6 o 7, el mensaje debe decir "Es fin de semana". Utiliza la estructura de
//control switch anidada para implementar esta función. Llama a la función con
//diferentes valores de día para verificar que funcione correctamente. 

function verificarDia(diaDeLaSemana){
    switch (diaDeLaSemana) {
        case 1:
            console.log("Es un dia laboral")
            break;
        case 2:
            console.log("Es un dia laboral")
            break;
        case 3:
            console.log("Es un dia laboral")
            break;
        case 4:
            console.log("Es un dia laboral")
            break;
        case 5:
            console.log("Es un dia laboral")
            break;
        case 6:
            console.log("Es fin de semana")
            break;
        case 7:
            console.log("Es fin de semana")
            break;
        default:
            break;
    }
}

verificarDia(3)
verificarDia(6)

