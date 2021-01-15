
const listas = document.getElementById('lists')
const artista = document.getElementById('artists')
const videos = document.getElementById('videos')
const cambio = document.getElementById('combiarColores')
console.log(artista)

// parte del cuerpo 
const topLists =  document.getElementById("top_playlists")
const topArtista = document.getElementById('top_artists')
const topVideo = document.getElementById('top_videos')
const quitarPoner = document.getElementById('quitarPoner')

 
 class Pestana{
  constructor(){
    this.cambioPestana()
  }
  cambioPestana(){
    // 1. evitar que se sigua el enlace
  //  aka evitar el "salto"
   event.preventDefault()
 
   // 2. ocultar todo
   topArtista.style.display = "none"
   topLists.style.display = "none"
   topVideo.style.display = "none"

   // 3. todos las cabeceras en negro
   artista.classList.remove('active')
   listas.classList.remove('active')
   videos.classList.remove('active')

   const link = event.target; // esto es un enlace <a>, un nodo
    // return link.hash

  console.log(link.hash)


   // 4. mostrar el contenido
   const cuerpoId = link.dataset.cuerpo; // esta es una cadena con el id
  // console.log(cuerpoId)
   // cuerpoId.hash
   const cuerpo = document.querySelector(cuerpoId); //este es un nodo
 // console.log(cuerpo.hash)
    console.log(cuerpo)
   cuerpo.style.display = "block";
  

   // 5. cambiar el color del enlace con la clase "active"
   const papa = link.parentNode; // deme mi padre directo
   papa.classList.add('active'); // agrega la clase "active" al elemento
 console.log(papa)
   

  }
 }


quitarPoner.addEventListener('click', () =>{
  let  pestanas = new Pestana()
})






