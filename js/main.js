const listas = document.getElementById('lists')
const artista = document.getElementById('artists')
const videos = document.getElementById('videos')
const cambio = document.getElementById('combiarColores')


// parte del cuerpo 
const topLists =  document.getElementById("top_playlists")
const topArtista = document.getElementById('top_artists')
const topVideo = document.getElementById('top_videos')



	// section donde va la funcion del click

function  mostrarLists(evento) {
   topLists.style.display = 'block'
   listas.classList.add('active')
   artista.classList.remove('active')
   videos.classList.remove('active')
    topArtista.style.display = 'none'
    topVideo.style.display = 'none'
	  evento.preventDefault()
    
}

function mostrarArtista(evento) {
    topArtista.style.display = "block";
    artista.classList.add('active')
    listas.classList.remove('active')
    videos.classList.remove('active')
    topLists.style.display = "none"
    topVideo.style.display = "none" 
     evento.preventDefault()
     
}

function mostrarVideos(evento) {
    topVideo.style.display = "block"
    videos.classList.add('active')
    artista.classList.remove('active')
    listas.classList.remove('active')
    topVideo.style.transition = " 0.3s"
    topArtista.style.display = "none"
    topLists.style.display = "none"
    evento.preventDefault()
}

//las variables que llevan el click

listas.addEventListener('click', mostrarLists)
artista.addEventListener('click', mostrarArtista)
videos.addEventListener('click', mostrarVideos);



