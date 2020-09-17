let playlists = document.getElementById('top_playlists')
let artists = document.getElementById('top_artists')
let videos = document.getElementById('top_videos')
let contenedor = document.getElementById('container')



console.log(playlists, artists, videos, contenedor )
function selecionDePestana(e){
	
	alert('hola soy yo!')

}
contenedor.addEventListener('click', selecionDePestana)
selecionDePestana()