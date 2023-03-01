// console.log("Hello world!");
// do console.log przekazujemy zawartość (w róznej formie), którą chcemy wyświetlić

// variables - zmienne
// var, let, const

// var name = "Kamil";
// var userName = "Alex";
// console.log(name, userName);

// let userName = "Kamil";
// userName = "Bartosz";

// let newUserName = "Alex";
// newUserName = "James";

// console.log(userName, newUserName);

// {
//   let wizardName = "Harry";
//   let wizardSurname = "Potter";
// }
// console.log(wizardName, wizardSurname);

// Keidy używamy let, a kiedy const? Keidy mamy pewnosć, że nasza zmienna nie będzie musiała zmienić przypisanej wartości.

// TYPY DANYCH:
// Prymitywne typy danych:
// string (łańcych znaków), liczby (number), wartości logiczne (true, false), specjalne typy danych: (null, undefined);
// Złożone typy danych: obiekty, tablice
// Jak sprawdzić, jakiego typy dane przechowuje dana zmienna? polecenie: typeof

// STRING:
// const age = "30";
// const ageToNumber = parseInt(age);
// console.log(typeof ageToNumber);

// const size = "230px";
// console.log(
//   "funckja parseInt wyciaga za stringa dane liczbowe, które wynoszą: " +
//     parseInt(size) +
//     " nie zapomnij dopisać px"
// );

// const price = "-18.99";
// console.log(parseFloat(price));

// funcka Number konwertuje do liczb zmiennoprzecinkowych
// const fuelPrice = "6.77";
// const fuelPriceToNumber = Number(fuelPrice);
// console.log(fuelPriceToNumber);
// console.log(+fuelPrice);

// Obiekt Math
// .floor() - zaokraglenie w dół
// .ceil() - w góre
// .random() = losuje liczbe z przedziału od 0 do 1
// .round() - zaokraglenie
// Math.max();

// const randomNumber = Math.random();
// console.log(randomNumber);

// Jak konwertować liczbę na string? toString/String

// użycie metody toString();
// let price = 140.43;
// const convertedToString = Number(price).toString();
// console.log(convertedToString);

// const filmTitle = "Fargo";
// console.log(filmTitle.indexOf("o"));

// const text = "bo zupa była za słona!";
// const containsWord = text.indexOf(" ");
// console.log(containsWord);

// const faveFilm = "Harry Potter and The Prisoner Of Azkaban";
// const slicedFilmTitle = faveFilm.slice(0);
// console.log(faveFilm, slicedFilmTitle);

// const faveFilm = "Harry Potter and The Prisoner Of Azkaban";
// const replacedFaveFilm = faveFilm.replace("Azkaban", "Hogwart");
// console.log(replacedFaveFilm);

// const faveFilm = "Harry Potter and The Prisoner Of Azkaban";
// console.log(faveFilm.split(" "));

// const film = "     Fargo   ";
// console.log(film.trim());

// const upperCaseName = "adam małysz".toUpperCase();
// console.log(upperCaseName);

// const lowerCaseName = "adam małysz".toLowerCase();
// console.log(lowerCaseName);

// let text = "HELLO WORLD";
// let letter = text.charAt(0);
// console.log(letter);

// const userName = "jAmEs";
// James
// const lowerCaseName = userName.toLowerCase();
// const capitalLetterName = lowerCaseName.charAt(0).toUpperCase();
// const fullConvertedName = capitalLetterName + lowerCaseName.slice(1);
// console.log(fullConvertedName);

// const name = "James";
// const surname = "Bond";
// const fullName = `Naszym ulubionym szpiegiem jest: ${name} ${surname}`;
// const fullNameAlt = "naszym ulubionym szpiegiem jest:" + name + " " + surname;
// console.log(fullName, fullNameAlt);

// WARTOŚCI LOGICZNE: true/ false; BOOLEAN
// const userHasMoney = false;
// const userIsUnderAge = true;

// console.log(typeof userHasMoney, typeof userIsUnderAge);

// const no = 113;
// const zero = 0;
// const text = "ola boga!";
// const emptyString = "";
// const undefinedExample = undefined;
// const nullExample = null;
// console.log(typeof nullExample);

// console.log(Boolean(no));
// console.log(Boolean(zero));
// console.log(Boolean(text));
// console.log(Boolean(emptyString));
// console.log(Boolean(undefinedExample));
// console.log(Boolean(nullExample));

// CO JEST W JS false?
// w procesie konwersji JS uznaje za  false następujące wartości: 0, pusty string, undefined, null

// CO W JS będzie zamienione na true?
// stringi, wartości liczbowe, obiekty (w tym także puste obiekty), tablice (w tym także puste tablice).

// const obj = {};
// console.log(Boolean(obj));

// const arr = [];
// console.log(Boolean(arr));

// undefined: wartość nie jest jeszcze przypisana, będzie, ale na razie nie jest.
// let hasWife = undefined;
// hasWife = true;
// console.log(hasWife);

//null - wartość pusta - patrz nullExample wyżej

// złożone typy danych: OBIEKTY
// a watch model

// const brand = "Casio";
// const category = "G-SHOCK";
// const model = "GA2100";
// const price = 459;
// const productionDate = 2019;

// const watch = {
//   brand: brand,
//   category: category,
//   model: model,
//   price: price,
//   productionDate: productionDate,
// };

// const tissotWatch = {
//   brand: "Tissot",
//   category: "elegant",
//   model: "best model ever",
//   price: 2000,
//   productionDate: 2023,
//   exchangeOption: false,
//   freeDelivery: false,
//   extraGuarantte: true,
//   characteristics: {
//     leatherStrap: true,
//     waterResist: true,
//     images: {
//       url: "jfndsn/djfsjds.img",
//       url: "jfndsn/djfsjds.img",
//       url: "jfndsn/djfsjds.img",
//     },
//     userComments: [
//       { admin: "it's simply brilliant" },
//       { user3434234: "love it! " },
//     ],
//   },
// };

// const { category, price, productionDate, characteristics } = tissotWatch;
// console.log(
//   category,
//   price,
//   characteristics.leatherStrap,
//   characteristics.userComments[0].admin
// );

// obiekty "kopiowane są" poprzez referencje do miejsca w pamieci

// const band = {
//   name: "The Beatles",
// };

// const newBand = band;
//to nie jest kopia band, to jest referencja do miejsa w pamięci, dzie band się znajduje
// band.name = "Elton John";
// console.log(band.name, newBand.name);

// copying an object in JS
// const country = {
//   name: "Poland",
// };

// const newCountry = { ...country };
// country.name = "Ireland";
// console.log(country, newCountry);

// let copyCountry = Object.assign({}, country);
// console.log(copyCountry);

// zmienne jako dane z kategorii prymitywnych (primitive data types), poddają się kopiowaniu
// let club = "Bayern Munich";
// let copiedClub = club;
// club = "Tottenham Hotspur <3";
// console.log(copiedClub);

//TABLICE - ARRAYS

// const arr = [{ name: "Robert" }];
// console.log(arr[4][0]);
// arr.push("mercedes");
// console.log(arr);
// console.log(arr.length);

// const obj = {
//   name: "Alex",
// };

// const obj1 = {
//   name: "Mark",
// };

// const obj2 = {
//   name: "David",
// };

// const names = [obj, obj1, obj2];
// const combinedArrays = arr.concat(names);
// console.log(combinedArrays);

// const combinedArrays = [...arr, ...names];
// console.log(combinedArrays);

// const arr = [1, 2, 3];
// arr.push(4);
// jak odczytać ostatni element w  tablicy?
// console.log(arr[arr.length - 1]);
// console.log(arr.at(-1));

// metodo pracy z tablicami
// METODY MUTACYJNE - zmieniają oryginalną tablice na której pracujemy

// pop - usun i zwróc ostatni element tablicy
// const popResult = arr.pop();
// console.log(popResult, arr);

// push - dodaj element do tablicy
// arr.push(10);
// console.log(arr);

// reverse - odwóc cała tablice
// console.log(arr.reverse());

//shift - usun i zwróc pierwszy element tablicy
// sort - posortuj tablicę zgodnie z przekazaną do niej funkcją
// console.log(newArr.sort((a, b) => a - b));

// splice - usuń i zwróc kawałek tablicy (ew. całą tablice)
// const splicedArr = arr.splice(0, 1);
// console.log(arr, splicedArr);

// unshift - dodaj element na początek tablicy
// arr.unshift(50);
// console.log(arr);

// METODY DOSTEPOWE
//concat - połacz dwie tablice
// const concatedArrays = arr.concat(newArr);
// console.log(concatedArrays);

// join - połacz wszytskie elementy tablicy w jeden ciag znaków, uzyj przekazanego argumentu jako separatora
// console.log(arr.join(" "));

// slice - zwróć kawałek tablicy
// const slicedArray = arr.slice(0, 2);
// console.log(arr, slicedArray);

// indexOf - indeks pierwszego szukanego elementu
// const index = arr.indexOf(9);

// napisz kod, który znajdzie i usunie z tabeli arr element o wartości 7.
// const index7 = arr.indexOf(7);
// arr.splice(index7, 1);
// console.log(arr);

// metody tablicowe w JS: forEach, map, filter, reduce, find, findIndex, some, every,

// forEach - wywołaj funkcję, dla każdego elementu tablicy :D
// arr.forEach((no) => console.log(no));
// arr.forEach((no, index, arr) => {
//   document.write(
//     `To jest element o wartości: ${no}, którego indexem jest: ${index}, inny sposob na dotarcie do wartości ${arr[index]} <br/>`
//   );
// });

// map - zwraca nową tablice ze zmodyfikowanymi elementami
// arr.forEach((no) => console.log(no * 2));
// const timesArr = arr.map((no) => no * 2);
// console.log(timesArr);

// metoda FILTER - zwraca do nowej tablicy te elementy, które spełnią warunek podany w funkcji
// const greaterThan250 = newArr.filter(function (no) {
//   return no >= 250;
// });
// console.log(greaterThan250);

// Napisz funkcje, która jako argument przyjmie tablice z liczbami, następnie dokonaj filtrowania tak aby w nowej tablicy
// pozostały tylko liczby większe lub równe 250, nastepnie posortuj tablicę od najmniejszej do najwiekszej liczby, a na koncu
// wypisz z uzyciem document.write 3 największych liczb
// const randomNumbers = [];

// for (let i = 0; i < 100; i++) {
//   randomNumbers.push(Math.floor(Math.random() * 3000 + 1));
// }

// const task = (arr) => {
//   const greaterThan250 = arr.filter(function (no) {
//     return no >= 250;
//   });
//   const sortedNumbers = greaterThan250.sort((a, b) => a - b);
//   const sortedNumbersLength = sortedNumbers.length;
//   const slicedSortedNumbers = sortedNumbers.slice(sortedNumbersLength - 3);
//   slicedSortedNumbers.forEach((sortedNumber) =>
//     document.write(`${sortedNumber} <br />`)
//   );
// };
// task(newArr);

// metoda reduce - do sumowania

// const initialValue = 10000;
// const reduceResult = newArr.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );
// console.log(reduceResult);

// const result = newArr.find((no) => no >= 800);
// console.log(result);

// const casio = "casio";

// const casioArr = [
//   { brand: casio, price: 200 },
//   { brand: casio, price: 300 },
//   { brand: casio, price: 400 },
//   { brand: casio, price: 500 },
//   { brand: casio, price: 600 },
//   { brand: casio, price: 700 },
//   { brand: casio, price: 800 },
//   { brand: casio, price: 900 },
//   { brand: casio, price: 1000 },
// ];

// const over400price = casioArr.findIndex((casio) => casio.price === 400);
// casioArr.splice(over400price, 1);
// console.log(casioArr);

// const priceRange = casioArr.filter(
//   (watch) => watch.price >= 400 && watch.price <= 800
// );
// console.log(priceRange);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArr = [534, 23, 657, 867, 324, 456, 568, 98, 789, 456, 78, 679, 250];

// some() - sprawdz, czy jakikolwiek element spełnia dany warunek
// const isGreaterThan100 = newArr.some((no) => no > 1000);
// console.log(typeof isGreaterThan100);

// every  - sprawdz czy wszystkie elementy spełniają dany warunek
// sprawdzamy czy wszytskie są parzyste
// const isEveryEven = newArr.every((no) => no % 2 === 0);
// console.log(isEveryEven);

// FUNKCJA - miniprogram, ma przyjać jakieś dane, coś z nimi zrobić, i zwrocić wynik

// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }
// console.log(addTwoNumbers(1, 2));

// function addThreeNumbers(x, y, z) {
//   return x + y + z;
// }
// const threeNumbersResult = addThreeNumbers(1, 2, 3);
// console.log(threeNumbersResult);

// function displayFaveFilm(filmName, actor) {
//   console.log(
//     `moim ulubuonym filmem jest: ${filmName}, a główną rolę odgrywa w nim: ${actor}`
//   );
// }
// displayFaveFilm("Carlito's Way", "Al Pacino");
// displayFaveFilm("Matrix", "Keanu Reeves");
// displayFaveFilm("M jak miłość", "Kożuchowska");

// const faveFootballClub = function (name, country, trophies) {
//   const message =
//     "klub:" +
//     " " +
//     name +
//     " " +
//     "pochodzi z " +
//     country +
//     " " +
//     "i ma " +
//     trophies +
//     " trofeów";
//   return message;
// };
// const message = console.log(faveFootballClub("Spurs", "UK", 18));

// // foo, bar, baz

// function foo(text) {
//   console.log(text);
// }

// function bar(name, callback) {
//   const upperCaseName = name.toUpperCase();
//   callback(upperCaseName);
// }
// bar("harry", foo);

// const multiplyNumbers = (num1, num2) => {
//   return num1 * num2;
// };
// const timesResult = multiplyNumbers(10, 100);

// const multiplyNumbers = (num1, num2) => num1 * num2;
// const result = multiplyNumbers(10, 10);

// const baz = faveSong => faveSong;
// faveSongResult = baz("Macarena");

// PĘTLE - foor loop

// const casio = "casio";

// const casioArr = [
//   { brand: casio, price: 200 },
//   { brand: casio, price: 300 },
//   { brand: casio, price: 400 },
//   { brand: casio, price: 500 },
//   { brand: casio, price: 600 },
//   { brand: casio, price: 700 },
//   { brand: casio, price: 800 },
//   { brand: casio, price: 900 },
//   { brand: casio, price: 1000 },
// ];

// casioArr.forEach((watch) => console.log(watch.price));

// for (start/licznik, warunek kończący, skok) {
/* kod wykonywany w każdej
    iteracji pętli */
// }

// const randomNumbers = [];

// for (let i = 0; i < 100; i++) {
//   const drawnNumber = Math.floor(Math.random() * 10000) + 1000;
//   randomNumbers.push(drawnNumber);

// }
// console.log(randomNumbers);

// pętle zagnieżdzone

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArr = [534, 23, 657, 867, 324, 456, 568, 98, 789, 456, 78, 679, 250];

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(
//       `Jestem pętlą zewnętrzną i wykonuje iteracje nr ${i}, a ja jestem pętlą wewnętrznąi wykonuje akualnie iteracje nr ${j}`
//     );
//   }
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     console.log("na tym kończymy działanie pętli");
//     break;
//   }
// }

// let i = 0;
// while (i != 5) {
//   console.log("Pętle są fajne");
//   i++;
// }

// const colorsArray = ["blue", "red", "cadetblue", "tomatoe", "yellow", "green"];

// const red = Math.floor(Math.random() * 100) + 1;
// const green = Math.floor(Math.random() * 100) + 1;
// const blue = Math.floor(Math.random() * 100) + 1;
// // console.log(red, green, blue);

// document.querySelector(
//   "div"
// ).style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

//napisz funkcje ktora jako argument przyjmie liczbe,ktora posluzy nam do okreslenia liczby cyfr do do wylosowania oraz przyjmie
// zakresy losowanych liczb

// const newRandomNumbers = [];

// const getRandomNumbers = (amount, min = 1, max = 10) => {
//   for (i = 0; i < amount; i++) {
//     newRandomNumbers.push(Math.floor(Math.random() * max) + min);
//   }
// };
// getRandomNumbers(300);
// console.log(newRandomNumbers);

// napisz funkcje ktora przyjmie 3 liczby, a nastepnie wskaze największa z nich
// Math.max();

// function greatestNumber(num1, num2, num3) {
//   return Math.max(num1, num2, num3);
// }
// console.log(greatestNumber(1, 2, 3));

// OPERATORY
// =   OPERATOR PRZYPISANIA

// ==  równy (rozpatruje wartośc, moga być różne typy)
// === równy co do wartości i typu
// != nierówny, rózny od
// !== nierówny i/lub róznego typu
// % - modulo

// && - AND
// || - OR

// const foo = 1;
// const bar = "1";

// console.log(foo === bar);
// console.log(foo !== bar);

// INSTRUKCJE WARUNKOWE - podejmowanie decyzji w programie
// const usersAge = 70;
// const isFriday = true;

// if (usersAge >= 18) {
//   if (isFriday) {
//     console.log("możesz kupić piwo!");
//   }
// } else if (usersAge > 65) {
//   console.log("smacznego piwa na emeryturze!");
// } else {
//   console.log("jesteś za młody");
// }

// if (usersAge >= 18 && isFriday) {
//   console.log("możesz kupić piwo!");
// } else if (usersAge > 65) {
//   console.log("smacznego piwa na emeryturze!");
// } else {
//   console.log("jesteś za młody");
// }

// SWITCH
// const value = "luty";

// switch (value) {
//   case "styczeń":
//     console.log("jestem styczeń");
//     break;
//   case "luty":
//     console.log("jesteśmy w lutym!");
//     break;
//   case "marzec":
//     console.log("jesteśmy w marcu");
//     break;
//   default:
//     console.log("jestesmy w miesiacach od kwietnia do grudnia");
// }

// if (value === "styczeń") {
//   console.log("jestem styczeń");
// } else if (value === "luty") {
//   console.log("jesteśmy w lutym!");
// } else if (value === "marzec") {
//   console.log("jesteśmy w marcu");
// } else {
//   console.log("jestesmy w miesiacach od kwietnia do grudnia");
// }

// Conditional ternary operator: "liniowy if"

1 > 0
  ? console.log("1 jest wieksze od zera")
  : console.log("zero jest wieksze od 1");

// &&
// 1 > 0 && "tak, jeden jest większe od zero";

// CWICZENIA:

// W pliku app.js swórz tablicę z trzema elementami np. z liczbami. Następnie
// wypisz w konsoli po kolei elementy tej tablicy.

const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(someNumbers[0]);
console.log(someNumbers[1]);
console.log(someNumbers[2]);

console.log(someNumbers[0], someNumbers[1], someNumbers[2]);

// W pliku script.js stwórz tablicę z listą swoich ulubionych owoców. Następnie:
// 1. Wypisz pierwszy owoc w konsoli.
// 2. Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu length).
// 3. W pętli wypisz wszystkie owoce (skorzystaj z atrybutu length).,

const fruits = ["jabłko", "pomarancza", "cytryna", "kiwi"];
fruits.push("pomidor");
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.at(-1));

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// W pliku app.js stwórz tablicę z 10 dowolnymi liczbami oraz zmienną  ```sum``` i przypisz do niej liczbę 0. Za pomocą pętli ```for```
// podaj sumę wszystkich elementów tablicy.

let sum = 0;

for (let i = 0; i < someNumbers.length; i++) {
  // sum = sum + someNumbers[i];
  sum += someNumbers[i];
}
console.log(sum);

let baz = 0;
someNumbers.forEach((no) => (baz += no));
console.log(baz);

const someNumbersSum = someNumbers.reduce((acc, val) => acc + val);
console.log(someNumbersSum);

// 1)	Napisz funkcje, która jako argument przyjmie tablicę i zwróci jej długość.

const arrLength = (arr) => {
  return arr.length;
};
const arrLengthResult = arrLength(fruits);
console.log("to jest długośc przekazanej tablicy:" + arrLengthResult);

// 2)	Napisz funkcje, która przyjmie 2 argumenty, imie, nazwisko oraz zwróci je w
//  jednym ciągu znaków (jeśli umiesz, zrób wielkie litery dla imienia i nazwiska”. Wykorzystaj grawis.

const nameSurnameConcat = (name, surname) => {
  const userName = name.toLowerCase();
  const userSurname = surname.toLowerCase();
  const fullUserName =
    userName.charAt(0).toUpperCase() +
    userName.slice(1) +
    " " +
    userSurname.charAt(0).toUpperCase() +
    userSurname.slice(1);
  return fullUserName;
};
nameSurnameConcat("harry", "potter");
nameSurnameConcat("rObeRciK", "LeWanDoWsKi");

// 3)  W pliku app.js stwórz tablicę z 10 dowolnymi liczbami (mozesz je wylosować) . W pętli ```for``` sprawdź, które są parzyste.
// Wypisz w konsoli sumę wszystkich parzystych liczb.
// https://www.w3schools.com/js/js_arithmetic.asp

if (10 % 2 === 0) {
  console.log("liczba 10 jest parzysta");
}

const isEvenOrNot = [
  34, 546, 23, 457, 678, 456, 234, 467, 23, 43, 54, 654, 567234, 456, 23, 54,
  75, 876, 456, 43, 234, 11, 45, 543,
];

const onlyEvenNumbers = [];

const verifyEvenOrNot = (isEvenOrNot) => {
  for (let i = 0; i < isEvenOrNot.length; i++) {
    if (isEvenOrNot[i] % 2 === 0) {
      onlyEvenNumbers.push(isEvenOrNot[i]);
    }
  }
  const sum = onlyEvenNumbers.reduce((acc, val) => acc + val);
  return sum;
};
const sumOfEvenNumbers = verifyEvenOrNot(isEvenOrNot);
console.log(sumOfEvenNumbers);

// 3)	przypisz do zmiennej wiek uzytkownika, a następnie zwróć informację „jesteś dzieckiem” dla osoby poniżej i
// rownego 10 roku życia, „jesteś nastolatkiem” dla wieku w przedziale 11=19, „prawdopodobnie chodzisz do pracy” dla osoby od 20 do 65 roku życia,
//  oraz „jesteś emerytem/emerytką” dla użytkownika powyżej 65 r. życia.

const userAge = 32;

if (userAge <= 10) {
  console.log("jesteś dzieckiem");
} else if (userAge >= 11 && userAge <= 19) {
  console.log("jestes nastolatkiem");
} else if (userAge >= 20 && userAge <= 65) {
  console.log("prawdopodobnie chodzisz do pracy");
} else {
  console.log("jesteś emerytem/emerytką");
}

// 6)	Napisz funkcję, która przyjmuje jako argument liczbę **n** i wyświetla **n** razy na stronie napis "Programowanie jest fajne!".

const nFunc = (n) => {
  for (let i = 0; i < n; i++) {
    console.log("Programowanie jest fajne");
  }
};
nFunc(3);

// 7) Napisz funkcję, która przyjmuje jako argumenty trzy liczby i **zwraca** największą z nich (zwraca, a nie wypisuje na ekranie).
//  Wypisać możesz dopiero jak zwrócisz wynik z funkcji.

// const maxNumber = (num1, num2, num3) => {
//   return Math.max(num1, num2, num3);
// };
// console.log(maxNumber(1, 2, 3));

const maxNumber = (...args) => {
  // const largest = args.sort((a, b) => a - b).reverse();
  // return largest[0];

  // const largest = args.sort((a, b) => a - b);
  // return largest[largest.length - 1];

  const arr = args;
  let largest = 0;
  for (let i = 0; i < args.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};
console.log(maxNumber(1, 2, 3, 4, 5, 6, 7, 8, 4435345));

// 8) Stwórz tablicę z losowymi liczbami (10 liczb) z przedziału 1-60.
// Wylosuj liczby za pomocą Math.random(). Następnie sprawdź każdą liczbę w tablicy i zmodyfikuj tak, aby była parzysta.

const newRandomNumbers = [];
for (let i = 0; i < 10; i++) {
  const random = Math.floor(Math.random() * 60 + 1);
  newRandomNumbers.push(random);
}

for (let i = 0; i < newRandomNumbers.length; i++) {
  if (newRandomNumbers[i] % 2 === 1) {
    newRandomNumbers[i] = newRandomNumbers[i] + 1;
  }
}
console.log(newRandomNumbers);

// 9)	Napisz funkcję o nazwie ```miksowanie```, która jako argument będzie przyjmowała napis. Zadaniem funkcji **jest zwrócenie** tego napisu,
// ale poprzedzonego słowem ```zmiksowana ```. Funkcja ma zwracać nowo powstały napis (poprzez ```return```). Następnie wypisz w konsoli to, co zwróciła funkcja.

const mix = (text) => `zmiksowana ${text}`;
console.log(mix("pomarańcza"));

// DOM
const h1 = document.querySelector("h1"); //znajduje pierwszy element danego typu
const h2 = document.getElementById("h2");
const h1s = document.querySelectorAll("h1");
const allh1s = document.getElementsByTagName("h1");
const byClassName = document.getElementsByClassName("h3");
const sectionP = document.querySelector("section p");
const buttonOn = document.querySelector("button");
const buttonOff = document.querySelector(".btn");

buttonOn.addEventListener("mouseover", () => {
  // sectionP.classList.toggle("active");
  // sectionP.classList.toggle("active");
  sectionP.classList.add("active");
});

buttonOn.addEventListener("mouseout", () => {
  // sectionP.classList.toggle("active");
  sectionP.classList.remove("active");
});

buttonOff.addEventListener("click", () => {
  // sectionP.classList.toggle("active");
  sectionP.classList.toggle("active");
});

// id – zwraca lub ustawia ID HTML jako ciąg
// znaków,
// innerHTML – zwraca lub ustawia kod HTML
// znajdujący się w tagu,
// outerHTML – zwraca/ustawia kod HTML
// wraz z tagiem,
// innerText – zwraca/ustawia tekst
// znajdujący się w tagu (bez zagnieżdżonych
// tagów),
// tagName – zwraca nazwę tagu,
// dataset – zwraca tablicę asocjacyjną
// (obiekt) dataset.
