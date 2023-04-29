// napisz funkcje, ktora przyjmie 2 argumenty a nastepnie wypisze w consoli typ przekazanych danych

const userName = "John Wick";
const isImmortal = true;

const checkType = (val1, val2) => {
  console.log(
    `pierwsza wartość jest typu danych: ${typeof val1}, a druga ${typeof val2}`
  );
};
checkType(userName, isImmortal);
checkType(isImmortal, userName);
checkType(1, 2);
checkType([1, 2, 3], { name: "John Wick" });

// napisz funkcje, któr wylosuje liczby z zakresu przekazanego przez użytkownika,a następnie
// umieści je w tablicy arr a następnie zwróci ich sumę

// będziemy losować liczbą od X do Y, od 1 do 49

// const arr = [];
// let counter = 0;

// const drawNumber = (min, max, amount = 5) => {
//   for (let i = 0; i < amount; i++) {
//     const result = Math.floor(Math.random() * max + min);
//     arr.push(result);
//     counter = counter + result;
//   }
//   console.log(`wartość zmiennej counter wynosi: ${counter}`, arr);
// };
// drawNumber(1, 2, 10);

// zmienen typu let i const tworzą swój blok kodu w którym są widoczne
// {
//   let charName = "John Wick";
// }

// Math floor - zaokrąglenie w dół
// Math.random - losuje liczbę z przedziału od 0 do 1

// PĘTLA FOR = wykonuj kod tak wiele razu, aż warunek przestanie być true

// iteracje = przejścia po elementach bądź przejscia w pętli for/while/for in/for of...
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

const colors = [
  "red",
  "blue",
  "green",
  "pink",
  "orange",
  "black",
  "gold",
  "purple",
  "yellow",
  "violet",
];

// const square = document.querySelector(".square");
const square3 = document.querySelector(".square:nth-of-type(3)");
const square4 = document.querySelector(".square:nth-of-type(4)");

[square3, square4].forEach((sq) => {
  sq.addEventListener("click", function () {
    console.log("tutaj mamy eventy na dwóch elementach: 3, 4??");
  });
});

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("click", () => {
    // const drawColor = Math.floor(Math.random() * colors.length);
    // square.style.backgroundColor = colors[drawColor];

    // rgb values
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const bgValue = `rgb(${red}, ${green}, ${blue})`;
    square.style.backgroundColor = bgValue;
  });
});

for (let i = 0; i < squares.length; i++) {
  console.log(squares[i]);
}

square4.addEventListener("click", () => {
  console.log("jestem pod czwórką i działam??");
});
