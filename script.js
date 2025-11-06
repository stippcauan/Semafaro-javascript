//Seleciona os elementos das luzes

const luzVermelha = document.getElementById("vermelho");
const luzAmarelo = document.getElementById("amarelo");
const luzVerde = document.getElementById("verde");

// Botões
const btnVermelho = document.getElementById("btnVermelho");
const btnAmarelo = document.getElementById("btnAmarelo");
const btnVerde = document.getElementById("btnVerde");
const btnAuto = document.getElementById("btnAuto");
const btnParar = document.getElementById("btnParar");

// Variável para o modo automático
let intervalo;

function limpar(){
    luzVermelha.className = 'luz';
    luzAmarelo.className = 'luz';
    luzVerde.className = 'luz';
}

function acenderVermelho(){
    limpar();
    luzVermelha.classList.add("acesa","vermelha");
}


function acenderAmarelo(){
    limpar();
    luzAmarelo.classList.add("acesa","amarelo");
}


function acenderVerde(){
    limpar();
    luzVerde.classList.add("acesa","verde");
}

function modoAutomatico(){
    limpar();
    let estado =0;
    intervalo = setInterval(()=>{
        if(estado === 0) acenderVermelho();
        else if(estado === 1) acenderAmarelo();
        else if(estado === 2) acenderVerde();
        estado = (estado + 1) % 3;
    }, 1000)
}

function parar(){
    clearInterval(intervalo);
    limpar();
}

btnParar.onclick = parar;
btnAuto.onclick = modoAutomatico;
btnVerde.onclick = acenderVerde;
btnAmarelo.onclick = acenderAmarelo;
btnVermelho.onclick = acenderVermelho;