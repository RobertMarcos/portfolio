 // menu
 let abri = true;
 let fechar = false;

 function Abrir(){
     if( abri == true){
         document.getElementById("menus").style.gridTemplateColumns=("200px");
         abri = false;
         
     }else{ document.getElementById("menus").style.gridTemplateColumns=("0px");
 abri = true;
 }



 }
