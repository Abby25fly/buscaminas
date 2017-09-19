$(".juego")[0].addEventListener("click", buscaMinas);
var contClick= 0;

function buscaMinas(evento){
  var img = evento.target.children[0];
  if(img.nodeName == "IMG"){
    img.className = "mostrar";
    contClick++;
    console.log(contClick);
  }
}

function pierde(){
  alert("Perdiste");
}
