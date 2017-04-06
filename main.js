  //alert("hola");
var tabla = document.getElementById('tabla');
var serpiente = document.getElementById('serpiente');

document.addEventListener("keydown", avanzarSerpiente);

var posicionX = 0;
var posicionY= 0;
var movimiento = 20;


function avanzarSerpiente() {
  switch (event.keyCode){ //codigo ASCCI
      case 37 : //IZQUIERDA
        posicionX = posicionX - movimiento;
        if (posicionX < 0){
           gameOver();
        } else{
          serpiente.style.marginLeft = posicionX +"px" ;
        }
      break;
      case 39 : //DERECHA
        posicionX = posicionX + movimiento;
        if (posicionX > 480){
          gameOver();
        } else{
          serpiente.style.marginLeft = posicionX +"px" ;
        }
      break;
      case 38 : //ARRIBA
      // alert(event.key);
        posicionY = posicionY - movimiento;
        if (posicionY < 0){
          gameOver();
        } else{
          serpiente.style.marginTop = posicionY +"px" ;
        }
      break;
      case 40 : //ABAJO
        posicionY = posicionY + movimiento;
        if (posicionY > 480){
           gameOver();
        } else{
          serpiente.style.marginTop = posicionY +"px" ;
        }
      break;
      // default:
         // alert("Pulsa solo las flechas");
  }
}

function gameOver() {
  alert("GAME OVER");
  document.removeEventListener("keydown", avanzarSerpiente);
}

var reinicio = document.getElementById("reinicio");

function reinicioJuego() {
  var posicionX = 0;
  var posicionY = 0;
  

}
