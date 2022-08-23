const contenedor = document.querySelector(".main-flex-container")
function creaPropiedades(link,img,titulo,direccion) {
	 imagen = `<a target="_blank" href="${link}"><img src=${img} class="imagen-js"></a>`;
	 titulo =`<h2 class="main-titulo">${titulo}</h2>`;
	 direccion = `<h3 class="main-direccion">${direccion}</h3>`;
	 return [imagen,titulo,direccion];
}
let tipoPropiedad = [];
function crearDiv(propiedad,tipoProp){
	let div = document.createElement("DIV");
div.classList.add(`main-flex-item`,`${tipoProp}`);
div.innerHTML = propiedad[0] + propiedad[1] + propiedad[2] ;
contenedor.appendChild(div)
}


let documentFragment = document.createDocumentFragment();

let propiedad1 = creaPropiedades("https://ficha.info/p/35e9fa1517b7438f8cdcc4165293817d","https://static.tokkobroker.com/pictures/79291943899973676200698969000636911720015885945382189518722888994991882198543.jpg","VENTA de Monoambiente. Bajas expensas. Almagro, CABA.","Bartolome Mitre al 3500");
crearDiv(propiedad1,"dep");
let propiedad2 = creaPropiedades("https://ficha.info/p/5d12dd2754274fcb8e9e45b498341ae9","https://static.tokkobroker.com/pictures/60081849994435187515171286914413440104735871433458313196050252608033965338274.jpg","VENTA de Departamento de 3 ambientes con vista abierta y cochera. Villa Real, CABA.","Irigoyen al 1900");
crearDiv(propiedad2,"dep");
let propiedad3 = creaPropiedades("https://ficha.info/p/c05897187752421cb4e5391176f57c0b","https://static.tokkobroker.com/pictures/86046632273051792863336012645670761490497169035249740057849569867114301109338.jpg","VENTA de Departamento de 4 amb c/ dependencia y patio descubierto a mts Plaza Arenales. Villa Devoto, CABA.","Bahía Blanca al 4200");
crearDiv(propiedad3,"dep");
let propiedad4 = creaPropiedades("https://ficha.info/p/0d6e1f16d10e487a9236f0b22e26a974","https://static.tokkobroker.com/pictures/8197826639519812673337576967316628116596485246152277712037101656089800716601.jpg","VENTA de Casa de 7 ambientes + departamento c/entrada independiente, Versalles, CABA.","Barragan al 1000");
crearDiv(propiedad4,"casa");
let propiedad5 = creaPropiedades("https://ficha.info/p/c90b24c7d3124a7abe28ea3027d812f3","https://static.tokkobroker.com/pictures/792104101808720256137619117806767851668876671967788193590218380773059969795.jpg","VENTA de Departamento de 3 amb 101 m2 c/ cochera, balcón y amenities, Puerto Madero, CABA.","Martha Salotti al 300");
crearDiv(propiedad5,"dep");
let propiedad6 = creaPropiedades("https://ficha.info/p/6c7c8b9bdb0249e7871512bbf013ed98","https://static.tokkobroker.com/pictures/62518291219696156119214563856227934889143532165374688181088599194182541367266.jpg","VENTA de Cochera cubiera. Oportunidad!! Flores, CABA.","Culpina al 500");
crearDiv(propiedad6,"cochera");
let propiedad7 = creaPropiedades("https://ficha.info/p/8c855ea939084069bf6772a08501ad91","https://static.tokkobroker.com/pictures/15353839014567202308120822074560093021802109696471658547357625844130456902085.jpg","VENTA de Departamento 2 ambientes con vista abierta, Saenz Peña, GBA.","Av America al 600");
crearDiv(propiedad7,"dep");
let propiedad8 = creaPropiedades("https://ficha.info/p/409d1820b8ab49a58e97fff18ab8347f","https://static.tokkobroker.com/pictures/86653397734193926457492796779927927841471368136534072746505436326297142008859.jpg","VENTA de Oficina sobre peatonal Florida. Bajas expensas. Privilegiada ubicación. Microcentro, CABA.","Florida al 200");
crearDiv(propiedad8,"ofi");
let propiedad9 = creaPropiedades("https://ficha.info/p/54af5fb2d842469eb4dae604c431ba3e","https://static.tokkobroker.com/pictures/113466299575678431234246916547869032189078051950184114102713919151327718721999.jpg","VENTA de Terreno de 8,70 m2 x 25 m2 - 217 m2 totales usab1 - Villa del Parque, CABA.","Alfredo Bufano al 2300");
crearDiv(propiedad9,"ter");
let propiedad10 = creaPropiedades("https://ficha.info/p/1b3c6112ed6b4f09abf5a8e4f87a3a62","https://static.tokkobroker.com/pictures/54382484085916008996560924322009993408290161091123015520757678709222093253739.jpg","VENTA de Terreno excelente ubicación a 2 cuadras de colectora Acceso Oeste. Parque Gaona, Moreno, GBA.","Gral Manuel Belgrano Esq/ Martin Luther King");
crearDiv(propiedad10,"ter");


const casa = document.querySelector(".casas");

casa.addEventListener("click",()=>{
for(let item of document.querySelectorAll(".dep")){
	item.classList.add("hidden")
}
for(let item of document.querySelectorAll(".ofi")){
	item.classList.add("hidden")
}
for(let item of document.querySelectorAll(".cochera")){
	item.classList.add("hidden")
}
for(let item of document.querySelectorAll(".ter")){
	item.classList.add("hidden")
}
for(let item of document.querySelectorAll(".casa")){
	item.classList.remove("hidden")
}
});
const departamento = document.querySelector(".departamento");

departamento.addEventListener("click",()=>{
for(let item of document.querySelectorAll(".dep")){
	item.classList.remove("hidden")
}
for(let item of document.querySelectorAll(".ofi")){
	item.classList.add("hidden")
}
for(let item of document.querySelectorAll(".cochera")){
	item.classList.add("hidden")
}
for(let item of document.querySelectorAll(".ter")){
	item.classList.add("hidden")
}
for(let item of document.querySelectorAll(".casa")){
	item.classList.add("hidden")
}
 
});

const oficina = document.querySelector(".oficina");

oficina.addEventListener("click",()=>{
for(let item of document.querySelectorAll(".dep")){
	item.classList.add("hidden")
}
for(let item of document.querySelectorAll(".ofi")){
	item.classList.remove("hidden")
}
for(let item of document.querySelectorAll(".cochera")){
	item.classList.add("hidden")
}
for(let item of document.querySelectorAll(".ter")){
	item.classList.add("hidden")
}
for(let item of document.querySelectorAll(".casa")){
	item.classList.add("hidden")
}
 
});

const cochera = document.querySelector(".cocheras");

cochera.addEventListener("click",()=>{
for(let item of document.querySelectorAll(".dep")){
	item.classList.add("hidden")
}
for(let item of document.querySelectorAll(".ofi")){
	item.classList.add("hidden")
}
for(let item of document.querySelectorAll(".cochera")){
	item.classList.remove("hidden")
}
for(let item of document.querySelectorAll(".ter")){
	item.classList.add("hidden")
}
for(let item of document.querySelectorAll(".casa")){
	item.classList.add("hidden")
}
 
});

const terreno = document.querySelector(".terreno");

terreno.addEventListener("click",()=>{
for(let item of document.querySelectorAll(".dep")){
	item.classList.add("hidden")
}
for(let item of document.querySelectorAll(".ofi")){
	item.classList.add("hidden")
}
for(let item of document.querySelectorAll(".cochera")){
	item.classList.add("hidden")
}
for(let item of document.querySelectorAll(".ter")){
	item.classList.remove("hidden")
}
for(let item of document.querySelectorAll(".casa")){
	item.classList.add("hidden")
}
 
});

const remover = document.querySelector(".eliminar")

remover.addEventListener("click",()=>{
for(let item of document.querySelectorAll(".dep")){
	item.classList.remove("hidden")
}
for(let item of document.querySelectorAll(".ofi")){
	item.classList.remove("hidden")
}
for(let item of document.querySelectorAll(".cochera")){
	item.classList.remove("hidden")
}
for(let item of document.querySelectorAll(".ter")){
	item.classList.remove("hidden")
}
for(let item of document.querySelectorAll(".casa")){
	item.classList.remove("hidden")
}
 
});




const barra = document.querySelector(".barra-icono");
barra.addEventListener("mouseover",()=>{

	document.querySelector(".ul-opciones").style.display = "block";


})
let ocultar = document.querySelector(".ul-opciones");

ocultar.addEventListener("mouseleave",()=>{ocultar.style.display = "none"})









