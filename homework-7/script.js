"use strict"

const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity).reduce (
    (accumulator,currentValue)=>
    accumulator * currentValue,
    );

console.log(productOfArray); // 24


2.

    const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
    };
   
    let updatedPriceData = Object.fromEntries(
        
        Object.entries(priceData).map(([key, value]) =>[key.toLowerCase(),value]));
    
      console.log(updatedPriceData);
      
    function optimizer(data) { // не зовсiм розумiю навiщо потрiбна функцiя.не виходить написати(вже тиждень сиджу над цим)
 
 let data = parseFloat(updatedPriceData[Object.value]);
 return data;
}  
optimizer();
console.log(data.toFixed(2))   
  
  
  // console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
   3.
    /*

    const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];


    let filteredNames = userNames.filter((name) => name.startsWith("Ю") || name.startsWith("О") || name.startsWith("А") || name.startsWith("Я") || name.startsWith("Е")|| name.startsWith("I"));

   //можливо якось можна пiд однi дужки всi голоснi взяти?

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']*/
   
    3.1
      
    const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

    for (var i = 0; i < userNames.length; i++) {
        console.log(userNames[i]);
      }
// не знаю як далi задати параметр фiльтру

      4.

      const userNames2 = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials= userNames2.map(name=>{
    const words = name.split(" ");
    const initials = words.map(word=> word[0]).join(".");
    return initials;
})

initials.sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]