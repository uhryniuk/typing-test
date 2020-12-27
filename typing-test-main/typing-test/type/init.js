/* Initialize Me! */

console.log("Type Init Script Connected");
window.onload = function(){
  let stuff = new insertWords(makeList(getNumbers()));
  console.log(stuff);
  /*
  How many rows of 12 make up roughly 300 words?
  300/12 =25 rows to be preloaded.

  */
  let preloadRows = [];
  let wordBank = document.getElementById('word-bank');
  for(let i=0; i <25; i++){
    let stuff = new insertWords(makeList(getNumbers()));
    wordBank.appendChild(stuff);
    preloadRows.push(stuff);
  }
  console.log(preloadRows);


}