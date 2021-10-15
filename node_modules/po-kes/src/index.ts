/* Jokes - Part 1 of Index. */
const lol = require('./Kiddings/jokes.js')
export = function Jokes(lang: "pt" | "en", x: number) {
  /* Language Select or Default: Portuguese. */
  var language;
  if (!lang || lang == "pt") {
    language = "pt"
  }
  else if (lang == "en") {
    language = "en"
  }
  
  /* Jokes Select or Random. */
  if(x) {
    lol.jokes[language][x];
  }
  else {
    var rand = Math.floor(Math.random() * lol.jokes["pt"].length);
     return lol.jokes["pt"][rand]
  }
}