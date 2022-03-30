lista = ["0","1","2","3","4","5","6","7","8","9","a","b",
        "c","d","e","f","g","h","i","j","k","l","m","n",
        "o","p","q","r","s","t","u","v","w","x","y","z",
        "A","B","C","D","E","F","G","H","I","J","K","L",
        "M","N","O","P","Q","R","S","T","U","V","W","X",
        "Y","Z","*","*","#","#","&","&","!","!",".","."]

function getpwd(){
  pwd=""
  inputSize = document.getElementById('showsize').innerHTML
  for (let index = 0; index < inputSize; index++) {
    const element = Math.floor(Math.random() * 72)
    pwd+=lista[element]
  }
  document.getElementById("pwd").innerHTML = pwd
}
