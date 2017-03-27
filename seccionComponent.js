function seccionControlador(){
//alert(oculto);
    //this.oculto="none",
    
    this.press=function(){

    var elemento=document.getElementById(this.titulo).style;
    if(elemento.display=='none')
        {
      elemento.display='block';
       //     elemento.innerHTML="-";
        }
    else
        {
      elemento.display='none';
     /*       elemento.innerHTML="+";*/
        }
  };
    
}

//var Control= require('seccionControlador.js');

angular.module('seccion',[])
.component('seccionComponente',{
    bindings:
    {
      titulo:"@",
      oculto:"@"
    },
    transclude:true,
  templateUrl:"./View/seccionVista.html",
  controller: seccionControlador,
});