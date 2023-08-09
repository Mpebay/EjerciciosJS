/*Generar una función que reciba como parámetro un array de cervezas y devuelva un
nuevo array con las 10 cervezas más alcohólicas*/


function lasDiezMasPower(array){
  const arrayModificable = array.map(elementoActual => elementoActual)
  arrayModificable.sort((a,b) => b.abv - a.abv)
  const primerosDiez = arrayModificable.slice(0, 10)
  return primerosDiez
}

let lasDiezMasPowerFinal = lasDiezMasPower(beers)
//Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo
//array con las 10 cervezas menos amargas.
function lasDiezMenosAmargas (array){
const arrayModificable = array.map(elementoActual => elementoActual)
arrayModificable.sort((a,b) => a.ibu - b.ibu)
const primerosDiezMenosAmargas = arrayModificable.slice(1, 11)
return primerosDiezMenosAmargas
}
let lasDiezMenosAmargasFinal = lasDiezMenosAmargas(beers)
//Generar una función que reciba como parámetro el array de cervezas y un valor de
//alcohol. La función debe devolver un nuevo array con las cervezas que no excedan el
//nivel etílico. Cada elemento del nuevo array debe ser un objeto que tenga la
//propiedades nombre, alcohol (abv) y "amargor" (ibu)
function cervezasPorNivelEtilico(array, valor){
  const cervezasFiltradas = array.filter (array => array.abv <= valor)
  return cervezasFiltradas
}
const filtradasfinal = cervezasPorNivelEtilico(beers, 5)
console.log(filtradasfinal)

let cervMapeadas = filtradasfinal.map(objeto =>{
  return{
  nombre: objeto.name,
  alcohol: objeto.abv,
  amargor: objeto.ibu,
} 
}
)

console.log(cervMapeadas)
//Generar una función que reciba como parámetro un array de cervezas, un nombre de
//propiedad y un valor booleano. Debe devolver un nuevo array con 10 cervezas
//ordenadas por la propiedad ingresada como segundo argumento, de manera
//ascendente si el tercero es true o descendente si es false.

function arrayNombreValor (array, propiedad, booleano){
  let array10cervezas = array.slice(0,10)
  if (booleano === true){
      array10cervezas.sort( (a, b) => a[propiedad] - b[propiedad])
  } else if (booleano === false){
      array10cervezas.sort( (a, b) => b[propiedad] - a[propiedad])
  }
  return array10cervezas
}

let birraNV = arrayNombreValor(beers, "ph", false)

console.log(birraNV)





//5

function renderizarTabla (array, idElementoHTML){
  let cuerpoTabla = document.getElementById(idElementoHTML)
  let infoCervezasTabla = array.map(elementoActual=>{
      return{
          name: elementoActual.name,
          abv: elementoActual.abv,
          ibu: elementoActual.ibu
      }
  })
  let tablaParaHTML = infoCervezasTabla.reduce ((acc, elemAc) => {
      return acc + `<tr>
                      <td>${elemAc.name}</td>
                      <td>${elemAc.abv}</td>
                      <td>${elemAc.ibu}</td>
                  </tr>`
                  
  }, "")
  cuerpoTabla.innerHTML = tablaParaHTML
}

renderizarTabla(beers, "tableBody")