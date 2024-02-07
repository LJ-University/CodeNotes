// This a JS Comment
// We won't look at JS just yet
// ignore the stuff below for now its for the button example
// we only uses buttons for JS typically

function Pressed() {
    let parent = document.getElementById('clicked');
    let paragraph = document.createElement('p');
    let text = document.createTextNode('You clicked the button');
    paragraph.appendChild(text);
    parent.appendChild(paragraph);
    console.log('Button was clicked');
}