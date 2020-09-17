let playlists = document.getElementById('top_playlists')
let artista = document.getElementById('top_artists')
let videos = document.getElementById('top_videos')
let lista = document.getElementById('lista')



console.log(lista)
// console.log(playlists, artists, videos, contenedor )

function  selecionar(){
	// alert('artista favorito')
	console.log('artista favorito')
}



// listaPrincipal()
// seleccionVideos()
//  selecionArtistas()
// playlists.addEventListener('click', listaPrincipal)
// artista.addEventListener('click', selecionArtistas)
// videos.addEventListener('click', seleccionVideos)
 for(let i = 0; i<=lista.children.length -1; i++){
 	lista.children[i].addEventListener('click', selecionar)
 }