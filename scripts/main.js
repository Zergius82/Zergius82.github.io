let myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/KT315.jpg') {
      myImage.setAttribute ('src','images/KT361.jpg');
    } else {
      myImage.setAttribute ('src','images/KT315.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myHeading.textContent = ' is cool';
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}