let lists = document.getElementById('lists')
let artista = document.getElementById('artists')
let videos = document.getElementById('videos')
let lista = document.getElementById('lista')

console.log(lists)

 





 function  listaReproducion(){
	
		document.getElementById("top_playlists").style.display = 'block'
		document.getElementById('top_artists').style.display = 'none'
		document.getElementById('top_videos').style.display = 'none'
	
	
}  



function  listaArtista(evento){
	
	 document.getElementById('top_artists').style.display = "block"
	 document.getElementById("top_playlists").style.display = "none"
	 document.getElementById("top_videos").style.display = "none"
	 	lists.classList.remove('active')
	 evento.preventDefault()

	        
	         	lista.classList.remove('active')
	

	
}


function  listaVideos(evento){
	
		document.getElementById('top_videos').style.display = "block"
		document.getElementById("top_artists").style.display = "none"
		document.getElementById("top_playlists").style.display = "none"
        evento.preventDefault()
		
		
}





     lists.addEventListener('click', listaReproducion)
 	artista.addEventListener('click', listaArtista)
 	videos.addEventListener('click', listaVideos)
 


// function abrirArtista(e){
// alert('abrir artist')
// }


// function abrirVideos(e){
// 	alert('abrir video')

// }


// lists.addEventListener('click', abrirPlayLista)
// artista.addEventListener('click', abrirArtista)
// videos.addEventListener('click', abrirVideos)

