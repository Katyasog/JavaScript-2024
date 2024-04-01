"use strict";

/*1. Напишіть функцію яка буде використовуватись для сортування масиву фільмів
Функція буде приймати два аргумента:
* властивість за якою треба посортувати
* опцію напрямку сортування (зростання чи спадання)*/



const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];


 
function byProperty(releaseYear) {
	
		return (a, b) => a[releaseYear] > b[releaseYear] ? 1 : -1;
	  }


console.log(movies.sort(byProperty('releaseYear', '>'))); 
// виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); 
// виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty('movieName', '>'))); 
// виведе масив фільмів посортованих по назві, в алфавітному порядку


2.
//Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд.


function someFunction(a,b){
let func= a+b;
console.log(func)
} // тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль

function slower(func, seconds) {
// тут ваш код для декоратора

return function() {
	console.log("Chill out, you will get you result in " + seconds + "seconds");
	setTimeout(() => func.apply(this, arguments), seconds * 1000);
}
}

let slowedSomeFunction = slower(someFunction, 5);
slowedSomeFunction(2, 3);
