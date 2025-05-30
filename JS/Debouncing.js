Definition: Debouncing is a technique used to limit how often a function is executed, especially when it is triggered repeatedly in rapid succession

Working: Debouncing ensures that a function is only called after a certain delay has passed since the last time it was triggered

Usecases:
a) Typing in an input field (input event)

2) Resizing the browser window

3) Scrolling

4) Clicking a button repeatedly


Example:

<!DOCTYPE html>
<html>
<head>
</head>
<body>

<input id="in">
<p id="p"></p>

<script>
document.getElementById('in').addEventListener('input', debounce(abcd));   // calling the debounce function with the callback func abcd

function abcd(e) {
document.getElementById('p').innerText = e.target.value;        // updating text in paragraph
}

let timer;

function debounce(callback) {

return function (ev) {
clearTimeout(timer);  // clearing timer repeatedly if event triggered(i.e. input typed) before 2secs elapses
timer = setTimeout(() => callback(ev), 2000)   // restarting timer for each keystroke, 
// will execute the callback func if 2 secs elapses between two keystroke events(if there is a pause of 2secs or more) 
}
}
</script>
</body>
</html>
