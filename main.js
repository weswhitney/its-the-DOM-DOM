var firstParagraph = document.getElementById('main');
console.log(firstParagraph);

var getAllElements = document.getElementsByTagName('ul');
console.log(getAllElements);

var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement);

var getAllListItems = document.getElementsByTagName('li');
console.log(getAllListItems);

for (var i = getAllListItems.length - 1; i >= 0; i--) {
	console.log(getAllListItems[i]);
}

var evenElements = document.getElementsByClassName('even');
console.log(evenElements);

var oddElements = document.getElementsByClassName('odd');
console.log(oddElements);

var firstEvenElement = document.getElementsByClassName('even')[0];
console.log(firstEvenElement);

var firstOddElement = document.getElementsByClassName('odd')[0];
console.log(firstOddElement);

var main = document.querySelector('#main');
console.log(main);

var	firstOddElement = document.querySelector('.odd');
console.log(firstOddElement);

var oddAndEvenElements = document.querySelectorAll('.odd, .even');
console.log(oddAndEvenElements);

document.getElementById('main').style.backgroundColor = "goldenrod";

document.getElementsByClassName('odd')[0].style.fontSize = "x-small";
document.getElementsByClassName('even')[0].style.float = "right";
document.getElementsByClassName('odd')[1].style.color = "aliceblue";
document.getElementsByClassName('even')[1].style.border = "solid";
document.getElementsByClassName('even')[1].style.borderColor = "blue";

var li = document.createElement("li");
console.log(li);

var newLiText = li.innerText = 'hello im the text';
console.log(newLiText);

getSingleElement.appendChild(li);
// console.log(allListItems);

var anotherListElement = document.createElement("li");
var anotherNewLiElement = anotherListElement.innerText = "prepend";
console.log(anotherListElement);

getSingleElement.insertBefore(anotherListElement, getSingleElement.firstChild);

