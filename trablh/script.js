function verificar(){
  let  usuario = ["Ana","Bruna","Carol"];
  let senha = ["123", "456", "789"];
  let input = document.getElementById("loguin").value;
  let input2 = document.getElementById("senha").value;
  const frase = document.getElementById("frase");
  let encontrado = false

  for (let i = 0; i < usuario.length; i++){
    if(input == usuario[i]){
    encontrado = true
    frase.innerHTML= "Senha incorreta"
    frase.classList.remove("text1")
    frase.classList.remove("text3")
    frase.classList.add("text2")
 }

    if(input2 == senha[i] && input == usuario[i]){
      encontrado = true
      frase.innerHTML= "Entrada Correta "
      frase.classList.remove("text1")
      frase.classList.add("text3")

    }
    
}
  if(!encontrado){
  frase.innerHTML= "Entrada incorreta"
   frase.classList.remove("text1")
   frase.classList.remove("text3")
   frase.classList.add("text2")
 }
 document.getElementById('loguin').value=''
 document.getElementById('senha').value=''
}

function mostraSenha() {
  var x = document.getElementById("senha");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}