const lists = document.getElementById('lists')
const artista = document.getElementById('artists')
const videos = document.getElementById('videos')


// parte del cuerpo 
const topLists =  document.getElementById("top_playlists")
const topArtista = document.getElementById('top_artists')
const topVideo = document.getElementById('top_videos')




function listaReproducion(e) {
   topLists.style.display = 'block'
    topArtista.style.display = 'none'
    topVideo.style.display = 'none'
	 lists.classList.remove("active")
    
}

function listaArtista(evento) {
    topArtista.style.display = "block"
    artista.style.color = "#ce198a"
    topLists.style.display = "none"
    topVideo.style.display = "none"
    // lists.classList.add('active')
     // lists.classList.remove("active")   
     evento.preventDefault()
     
}

function listaVideos(evento) {
    topVideo.style.display = "block"
    topArtista.style.display = "none"
    topLists.style.display = "none"
    // videos.classList.add('active')
    evento.preventDefault()
}
lists.addEventListener('click', listaReproducion)
artista.addEventListener('click', listaArtista)
videos.addEventListener('click', listaVideos);

