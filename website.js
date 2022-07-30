import quotesJson from "./quotes.json" assert { type: "json" };

let i = 0;
let txt = "I created this website to showcase my application for FAC skills bootcamp.";
let speed = 250;
let _INTERVAL_VAL;

const typingEffect = () => {
  if (i < txt.length) {
    document.getElementById("typing_effect").innerHTML += txt.charAt(i);
    i++;
  }

  if (i === txt.length) {
    clearInterval(_INTERVAL_VAL);
    setTimeout(function () {
      _INTERVAL_VAL = setInterval(Delete, 50);
    }, 1000);
  }
};

// Implements deleting effect
function Delete() {
  // Get substring with 1 characater deleted
  let text = txt.substring(0, i - 1);
  document.getElementById("typing_effect").innerHTML = text;
  i--;

  // If sentence has been deleted then start to display the next sentence
  if (text === "") {
    clearInterval(_INTERVAL_VAL);

    // Start to display the next sentence after some time
    setTimeout(function () {
      _INTERVAL_VAL = setInterval(typingEffect, 100);
    }, 200);
  }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(typingEffect, speed);

const qouteEl = document.getElementById("quotation");
const sourceEl = document.getElementById("source");

const renderQuotes = () => {
    let ramdomQoute = Math.floor(Math.random() * quotesJson.length);
    qouteEl.innerHTML = quotesJson[ramdomQoute].quote;
    sourceEl.innerHTML = quotesJson[ramdomQoute].source;
}

setInterval(renderQuotes, 3000);