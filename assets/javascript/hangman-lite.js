(function(){

    document.write("hello from hangman-lite.js");
let hangmanword = "supercalifragilisticexpialidocious"
let hangmanletter = "s"

console.log((hangmanword.match(new RegExp(hangmanletter, "g")) || []).length);



})();