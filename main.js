const generatBtn = document.querySelector(".generate");
const stopBtn = document.querySelector(".stop");
const quteDisplay = document.querySelector(".qute-display");
const quteId = document.querySelector(".qute-id");
const autoBtn = document.querySelector(".auto");
const autoStatus = document.querySelector(".auto-status");
let intervalId;
generatBtn.onclick = generatQuote;
autoBtn.onclick = startAutPlay;

async function getQuotes() {
     const response = await fetch("random11.json");
     const data = await response.json();
     return data;
}

async function generatQuote() {
const quotes = await getQuotes();
const quote = quotes[Math.floor(Math.random() * quotes.length)]
quteDisplay.innerHTML = quote.text;
quteId.innerHTML = quote.id;
}

function startAutPlay() {
     intervalId = setInterval(generatQuote, 2000);
     autoBtn.innerHTML = "Auto: Ok";
}

function stopAutoPlay() {
     clearInterval(intervalId);
     autoBtn.innerHTML = "Auto: OFF";
}