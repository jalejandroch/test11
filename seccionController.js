function seccionControlador(){
  this.press=function(){
    var elemento=document.getElementById('informacionSeccion');
    if(!elemento.hidden)
      elemento.hidden=true;
    else
      elemento.hidden=false;
  };
}

module.exports=seccionControlador;