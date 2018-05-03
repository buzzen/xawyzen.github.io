var myImage = document.querySelector('img');

myImage.onclick = function() {
    var src = myImage.getAttribute('src');

    if (src == "images/specialized-allez-sprint-comp.jpg") {
        myImage.setAttribute('src', "images/specialized.jpg");
    } else {
        myImage.setAttribute('src', "images/specialized-allez-sprint-comp.jpg");
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUsername() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);

    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUsername();
} else {
    myHeading.textContent = "Mozilla is cool, " + localStorage.getItem('name');
}

myButton.onclick = function() {
    setUsername();
}
