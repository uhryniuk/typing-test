/* Initialize Me! */
console.log("Type Init Script Connected");
window.onload = function(){
window.setInterval(function(){
  // This method of getting user input may be
  // too laggy to acutally do.
  // We'd ahve to receive input roughly every 10 miliseconds.
  // IDK how fun that would work.
  let currentWord = document.getElementById("word-input").value;
  console.log(currentWord)}, 15000);
}
