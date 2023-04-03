/*
sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum)

const year = 2023;
if (year % 4 === 0) {
    console.log("Ten rok jest przestepny")
} else {
    console.log("Ten rok nie jest przestepny")
}

//Napisz program, który generuje losowe liczby z zakresu od 1 do 10 i sprawdza, czy użytkownik zgadł liczbę. 
//Program powinien wyświetlać informacje o tym, czy użytkownik zgadł, czy nie, oraz ilość prób, jakie potrzebował.
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess;
let numberOfGuesses = 0;

do {
  guess = parseInt(prompt("Guess the number between 1 and 10"));
  numberOfGuesses++;
  if (guess === randomNumber) {
    alert("You guessed it! It took you " + numberOfGuesses + " guesses.");
  } else {
    alert("Sorry, try again");
  }
  
} while (guess !== randomNumber);


let userNumber = prompt("Podaj liczbe")
for (let i = 1; i <= userNumber; i++) {
    if (i % 2 === 0) {
        console.log(i + ' ta liczba jest parzysta')
    } else {
        console.log(i + ' ta liczba jest nieparzysta')
    }
}

let randomNumbers = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100) + 1);

randomNumbers.forEach(number => {
    if (number % 3 === 0 || number % 5 === 0 || number % 7 === 0) {
        console.log(`${number} jest podzielne przez 3, 5, 7`);
    }
});

const randomNumber = Math.floor(Math.random() * 100) + 1;

if (randomNumber % 3 === 0) {
    console.log(`${randomNumber} jest podzielne przez 3`)
} else if (randomNumber % 5 === 0) {
    console.log(`${randomNumber} jest podzielne przez 5`)
} else if (randomNumber % 7 === 0) {
    console.log(`${randomNumber} jest podzielne przez 7`)
} else {
    console.log(`${randomNumber} nie jest podzielne przez 3, 5 ani 7`);
}



const number = [1, 2, 3, 4, 5, 6]
number.reverse()
console.log(number)

for (let i = 1; i <= 10; i++) {
    console.log(i + 'x' + 10 + '=' + i * 10)
}



const words = ["arbuz", "pomarancza", "kiwi", "morela"]

for (let i = words.length - 1; i >= 0; i--) {
    console.log(words[i].split('').reverse().join(''));
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
let password = '';
for (let i = 0; i < 12; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];

}
console.log(password);

let number = 10
let result = 0

for (let i = 0; i < number; i++) {
    result = result + i
}

console.log("Suma liczb od 1 do " + number + " wynosi " + result)


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = []

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        result.push("even");
    } else if (numbers[i] % 2 !== 0) {
        result.push("odd");
    }

}

console.log(result);

*/


function rockPaperScissors(player1, player2) {
    if (player1 === player2) {
        return "Draw!";
    } else if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "scissors" && player2 === "paper") ||
        (player1 === "paper" && player2 === "rock")
    ) {
        return "Player 1 won!";
    } else {
        return "Player 2 won!";
    }
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2);

}





















































































































































































































