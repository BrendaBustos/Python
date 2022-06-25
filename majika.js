/*play video*/
var video = document.querySelector('#videook')
var btn_rep = document.querySelector('#reproducir')

function reproducir() {
	if(video.paused) {
	video.play()
	
    }   
} 

function pausar(){
	video.pause()
}

function detener() {
	video.pause()
	video.currentTime = 0
	/*btn_rep.innerHTML = 'reproducir'*/
}

function saltar(fotograma) {
	video.currentTime += fotograma
}

/*tallo flor*/
function iniciar(){
var elemento=document.getElementById('lienzo'); 
lienzo=elemento.getContext('2d');
lienzo.fillStyle="green";
lienzo.fillRect(160,10,40,500);
lienzo.fillStyle=('#996600');
lienzo.fillRect(0,300,400,700);
}  window.addEventListener("load",  iniciar,  false);








