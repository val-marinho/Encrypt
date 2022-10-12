let saida = document.getElementById("saida");

let numero = document.getElementById("numero");
let alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
let opcao = document.getElementById("selecao")


opcao.addEventListener("change",function(){

    let n = document.getElementById("numero");

    if(opcao.value === "cifraDeCesar"){
        n.style.display = 'flex';
        let inputs = document.getElementById("mini").className = 'mini-caixas';
        
    }
    else {
        n.style.display = 'none';
        let inputs = document.getElementById("mini").className = 'mini-caixas_antes';
    }
    
})


function codificar(){
    let mensagem = document.getElementById("msg").value
    let opcao = document.getElementById("selecao").value

    console.log(opcao)
    if(opcao === "base64"){
        codificacaoBase64(mensagem)
    }
    else if(opcao === "cifraDeCesar"){
        console.log("to dentro")
     
        cifraCesar(mensagem)
    }
    else{
        alert("selecione uma opção")
    }

} 

function decodificar(){

    let mensagem = document.getElementById("msg").value
    let opcao = document.getElementById("selecao").value

    console.log(opcao)
    if(opcao === "base64"){
        decodificacaoBase64()
    }
    else if(opcao === "cifraDeCesar"){
        decodificarCifraDeCesar()
    }
    else{
        alert("selecione uma opção")
    }
}

function copiarColar(){
   let saidaAtual = saida.value
   let mensagem = document.getElementById("msg").value = saidaAtual
   console.log(saidaAtual)
}


function codificacaoBase64(mensagem){
   let mensagemCodificada = btoa(mensagem);
   console.log(mensagemCodificada);
   saida.innerHTML = mensagemCodificada
}

function decodificacaoBase64(){
    let mensagem = document.getElementById("msg").value;
    let mensagemDecodificada = atob(mensagem);
    saida.innerHTML = mensagemDecodificada
}

function cifraCesar(){

    let mensagem = document.getElementById("msg").value;
    let msgMinusculo= mensagem.toLowerCase();
    let n = (Number(numero.value) % 26);
    let msg = '';
  
    for(var i = 0; i < msgMinusculo.length; i++){
       for(var j =0; j < alfabeto.length; j++){
         if(msgMinusculo[i] == alfabeto[j]){
            msg += alfabeto [j + n]
           break;
       } else if (msgMinusculo[i] == ' ') {
        msg += ' ';
           break;
       }
      
  
  }
  console.log(msg);
  saida.value =msg;
}
}

function decodificarCifraDeCesar() {
    
    let mensagem = document.getElementById("msg").value;
    let msgMinusculo= mensagem.toLowerCase();
    let n = (Number(numero.value) % 26);
    let msg = '';
  
    for(var i = 0; i < msgMinusculo.length; i++){
       for(var j = alfabeto.length - 1; j >= 0; j--){
         if(msgMinusculo[i] == alfabeto[j]){
            msg += alfabeto [j - n]
           break;
       } else if (msgMinusculo[i] == ' ') {
           msg += ' ';
           break;
       }
      }
  }
  saida.value =msg;
}

