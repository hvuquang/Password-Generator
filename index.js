const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const btnEl = document.getElementById("main-btn")
const passOneEl = document.getElementById("passOne-El")
const passTwoEl = document.getElementById("passTwo-El")
let passOne = []
let passTwo = []
let times = 15

btnEl.addEventListener("click", generateClick);

function generateClick() {
    passOne = generatePassword()
    passTwo = generatePassword()
    display()
}

function display() {
    let concatStr1 = ""
    let concatStr2 = ""
    for(let i = 0; i < times; i++) {
         concatStr1 += passOne[i]
         concatStr2 += passTwo[i]
    }
    passOneEl.textContent = concatStr1
    passTwoEl.textContent = concatStr2
}

function generatePassword() {
    let passRandom = []
    for(let i = 0; i < times; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        let character = characters[randomIndex]
        passRandom.push(character)
    }
    return passRandom
}

