/*1.1 Excercise Code*/
//Note: this is how you should notate .js code in short bursts//
/* note: this is how you should notate code if you will be writing
much longer content*/
//let myName = 'Lauren';
//document.write(myName);

/*1.1 excercise: Math*/
//let simpleAddition = 2 + 2;
//document.write(simpleAddition);

//let size = 100;
//let doubleSize = size * 2;
//document.write(doubleSize);

/*Note: can't include 'size' multiple times, the code below won't show if code
above is active*/

//let size = 100;
//let doubleSize = size * 2;
//let minSize = (doubleSize * 2) - (size / 2);
//document.write(minSize)

/*1.1 task code*/
/*popup message*/
//alert('hello world');

/*favorite food*/
//let myFavoriteFood = 'sushi';
//myFavoriteFood = 10;
//document.write(myFavoriteFood);

/*1.2 practice*/
//let name = 'Lauren';
//let age = 22;
//let message = `Hello!
//This is a longer message here.
//My name is: ${name},
//and I'm ${age}.`;
//document.write(message);

/*objects. Note:
Everything between the curly braces makes up the object.*/
//let car = {
//  color: 'red',
//  mileage: 10
//};

//let annesAge = 27;
//let anne = {
//  name: 'Anne',
//  age: annesAge,
//  child: {
//    name: 'Joe',
//    age: 2
//  }
//};

/*Rule: whenever you open parentheses, curly braces, or square brackets,
 and have a line break before you write the closing parentheses/brackets,
you indent.*/


/*arrays*/
// array of strings
//let foodArray = ['sushi', 'tacos', 'sweet potato casserole'];

// array of objects
//let carArray = [
  //{ type: 'Bus', wheels: 4, color: 'blue'},
  //{ type: 'Sport', wheels: 4, color: 'red'}
//];

// array of arrays
//let myCalculatorNumbers = [
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//];

//*WILL CLEAR THE ABOVE LATER//

//*For task 1.2* Created my own array rather than pokedex//
//let games=
//[{name: "true colors", type: "roleplay"},
//  {name: "before the storm", type:[ "roleplay","storybased"]}
// ];
//*API LINKS for personal project:
//https://public-apis.xyz/spotify-7947
//https:public-apis.xyz/steam-2376//

//*Adding in Array for Pokedex*//



let pokemon=
[{name: 'Espeon', height: '2\'11"', type: 'Psychic', size: '58.4 lbs'},
{name: 'Umbreon', height: '3\' 03"', type: ['Dark', 'normal'], size: '59.5 lbs'}
];
//adding a for loop//
for (let i = 0; i < pokemon.length;
i++) {
  document.write("Pokemon: " + pokemon[i].name + " | "
  + " Height: " + pokemon[i].height + "<br />");
}

if (pokemon[i].size)
console.log(pokemon);
















/*welcome*/
