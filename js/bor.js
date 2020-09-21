const listaOrdenada = document.querySelector("ul")

function cambioColor(){
for(let j=0; j<=listaOrdenada.children.length; j++){
	 listaOrdenada.classList.add('active')
 alert('cambiar color')
 // console.log(listaOrdenar.children[j])
}
listaOrdenada.classList.add("active")
}



for(let i=0; i<listaOrdenada.children.length ; i++){
	listaOrdenada.children[i].addEventListener('click', cambioColor)
	// classList.remove('active')
	console.log(listaOrdenada.children[i])
}
