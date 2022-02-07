var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'index.html/../nord-man2900.JPG') {
      myImage.setAttribute ('src','images/auto/firefox2.png');
    } else {
      myImage.setAttribute ('src','index.html/../nord-man2900.JPG');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Привет, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Привет, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
