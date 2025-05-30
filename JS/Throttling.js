Definition: Throttling is a technique used to limit how often a function can be called over time, regardless of how many times an event occurs

Working: Throttling ensures a function is only called once every X milliseconds, even if it is triggered more frequently
Useful when you want to rate-limit event handling

Usecases:

a) Scroll events (window.onscroll)

b) Resize events (window.onresize)

c) Mouse movements (mousemove)

d) Button mashing

Example Code:

<!DOCTYPE html>
<html>
<head>
</head>
<body>

<input id="in">
<p id="p"></p>

<script>
document.getElementById('in').addEventListener('input', throttle(abcd));   // calling throttle func with callback func abcd

function abcd(e) {
document.getElementById('p').innerText = e.target.value;    // updating text
}

let flag = true;          // setting flag for event trigger tracking

function throttle(callback) {

return function (ev) {

if (flag) {
  callback(ev);  // if flag is true event is fired, callback func is executed  
  flag = false;	// setting flag 'false' until 2 secs, hence no callback func execution for 2 secs(or delay secs)

setTimeout(() => {
    flag = true; 	// after 2 secs, flag is reset to true, hence again loop will execute, callback func will be executed
    }, 2000)
  }
//this continues after each two secs of keystroke events, IRRESPECTIVE OF how much pause or speed is there between event firing(i.e. key pressing) 
}
}
</script>
</body>
</html>


