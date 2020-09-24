

 const colores = document.getElementById('combiarColores')

	function cambioColores(){
	if(lists){
		topLists.style.display = 'block'
		topArtista.style.display = "none"
		topVideo.style.display = "none"

	}if(artista){
		topLists.style.display = 'none'
		topArtista.style.display = "block"
		topVideo.style.display = "none"
	}if( videos){
		topLists.style.display = 'none'
		topArtista.style.display = "none"
		topVideo.style.display = "block"
		videos.style.color = "red"
	}else{
		return lists
	}

	}

	  
	
	for(let i=0; i<colores.children.length; i++){
		colores.children[i].addEventListener('click', cambioColores)
	}
	

// colores.addEventListener('click', cambioColores)