


//jogo
const tela = document.querySelector('canvas');
const pincel = tela.getContext("2d");
let r = 15;
let press = document.getElementById("Comecar");
let velo = 1500;
const p = document.getElementById("pontos");
let ponto = 0;
const indicador = document.getElementById("indicador");
function desenhandobolinhas(x,y,r,cor){
    pincel.beginPath();
    pincel.fillStyle = cor;
    pincel.arc(x,y,r,0,2 * Math.PI);
    pincel.fill();
}

function limpa(){
    pincel.clearRect(0,0,600,400);
}

function desenhadoAlvos(x,y){
    
    desenhandobolinhas(x,y,r+20,'red');
    desenhandobolinhas(x,y,r+10,'white');
    desenhandobolinhas(x,y,r,'red');
    

}

function posiale(maximo){
   
    return Math.floor(Math.random()*maximo);
    
}
var xale = 0;
var yale = 0; 

function animacao(){
xale =  posiale(600);
yale = posiale(400)
    limpa();
    desenhadoAlvos(xale,yale);
}

function disparo(event){
var a = event.pageX - tela.offsetLeft;
var b = event.pageY - tela.offsetTop;

if(
a > xale - r 
&& a  < xale + r 
&& b > yale-r   
&& b < yale + r  ){

    acertou();
}else{
   velo = velo + 100;
   
}

}
function acertou(){
    indicador.textContent = "Parabén, Vamos aumentar a velocidade !!!"
    indicador.style.color=("red");
    velo = velo - 0,2;
    ponto++;

    if(ponto >=5){
        velo = velo - 20;
        indicador.textContent = "Ainda está facil né, vamos ver agora !!!"
    }

    
   
    p.textContent ="Pontos: "+ ponto; 
    p.style.color=("red");
    start();
}

function start(){

    setInterval(animacao,velo)
    tela.onclick = disparo;


}
    press.onclick = start;
