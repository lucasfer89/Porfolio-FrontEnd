//Encontrar elementos HTML por ID (getElementById)
const element = document.getElementById("intro");
//Encontrar elementos HTML por nombre de etiqueta (getElementsByTagName)
const element = document.getElementsByTagName("p");
//Encontrar elementos HTML por nombre de clase (getElementsByClassName)
const x = document.getElementsByClassName("intro");
//Encontrar elementos HTML mediante selectores CSS (querySelectorAll)
const x = document.querySelectorAll("p.intro");

//element.innerHTML =  new html content
//Cambia el contenido de un elemento HTML

//element.attribute = new value
//Cambia el valor del atributo de un elemento HTML

//element.style.property = new style
//Cambia el valor del atributo de un elemento HTML

//Método
//Descripción

//element.setAttribute(attribute, value)
//Cambia el estilo de un elemento HTML.

//document.createElement(element)
//Crea un elemento HTML

//document.removeChild(element)
//Elimina un elemento HTML

//document.appendChild(element)
//Agrega un elemento HTML

//document.replaceChild(new, old)
//Reemplaza un elemento HTML


function addElement () {

    // obtener el elemento div con id = "div_example"
  
    const existDiv = document.getElementById("div_example");
  
    // crear un nuevo elemento div 
  
    const newDiv = document.createElement("div");
  
    // agregar el nuevo elemento div existente
  
    existDiv.appendChild(newDiv);
  
  } 

  