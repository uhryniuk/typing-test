/* Initialize Me! */

console.log("Type Init Script Connected");
window.onload = function(){
  let currentWord = document.getElementById("word-input");
window.setInterval(function(){console.log(currentWord.value)}, 3000);
  currentWord.addEventListener("keydown", function(e){
    console.log(e.key);
    if(e.key == "Space"){
      console.log("Yaoweee");
      currentWord.value == null;
}
}
}
