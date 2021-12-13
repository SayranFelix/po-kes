// jokes - part 1 of index.
const lol = require('./kiddings/jokes.ts')
export = function Jokes(lang: "pt" | "en", x: number) {
  // anguage select or default portuguese
  var language;
  if (!lang || lang == "pt") {
    language = "pt"
  }
  else if (lang == "en") {
    language = "en"
  }
  
  // jokes select or random
  if(x) {
    lol.jokes[language][x];
  }
  else {
    var rand = Math.floor(Math.random() * lol.jokes["pt"].length);
     return lol.jokes["pt"][rand]
  }
}
