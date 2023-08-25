//side

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


  /*Decodificador*/      
        var receber = document.querySelector("#usuario");
        var resulta = document.querySelector("#resul");
        var criptoGrafar = document.querySelector("#crip");
        var descriptografar = document.querySelector("#descrip");
        var copia = document.getElementById("copiar");
        var contador = document.getElementById("contc");
        let contador2 = document.getElementById("contc2")

   
    


        function Checagem(){
            //checar letras Maiusculas
                const x = receber.value
                const y = receber.value

                const verif = /[A-Z]/
            
            //checar caracteres especiais 
            const veri = /[^\w\s]|[\u00C0-\u017F]/;
            
            /**/

        if(verif.test(x)== true || veri.test(y) == true){
            
            return true

        }else{return false}
            
        

        }

     function copiarResu(){
            resulta.select();
            document.execCommand("copy")
            resulta.value = "";
            

        }

        
        function ContarCaracter(c,d){    
        
        if(resulta != ""){
         
        let y = resulta.value;
         
         d = y.replace(/\s/g,'');
         
         contador2.textContent = d.length;

        }else{contador2.textContent = 0}
         


         if(receber.value != ""){
            
            let x = receber.value;
            
            

           c = x.replace(/\s/g,'');
          
        
            contador.textContent = c.length;
            
        
        }else{
            contador.textContent = 0 ;
            
            }

            
        
        }

        

    function traduzir(){
        
        var substituir = {"a": "ai","e": "enter", "i":"imes", "o":"ober","u":"ufat"}
            
        if(Checagem() == true){

            alert("Não é aceito o uso de caracteres especiais, acentos e letras maiusculas !!!");
            
            receber.value = "";

                }else{
                    var messagem = receber.value;
                    var msg = messagem.split("");
                   
                    //msg[]

                        receber.value="";
                        for(var posi = 0; posi < msg.length; posi++){
                                    if(substituir[msg[posi]]){
                                        msg[posi] = substituir[msg[posi]]
                                    }

                        }
                }
                
            var mostra = msg.join("");
          
            resulta.value = mostra    
              
        //mostrar.value = messagem.replace(/a/g,a);
        
    }

 function descrip(){

    var des = receber.value;
    var con = des.replace(/ai/g,"a" )
            .replace(/enter/g,"e")  
            .replace(/ober/g,"o")  
            .replace(/imes/g,"i") 
            .replace(/ufat/g,"u"); 

     receber.value="";

    resulta.value = con;


        }

        
    const enter = 13;

    function apertar (event){ 

    if(event.keyCode == enter){
        event.preventDefault();
        traduzir();
        }
    }
    
        receber.addEventListener('keypress',apertar);
        setInterval(ContarCaracter,1000)
        criptoGrafar.onclick=traduzir;
        descriptografar.onclick=descrip;
        copia.onclick = copiarResu;
    // estilo

