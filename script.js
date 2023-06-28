var randomIndex = Math.floor(Math.random() * 3);
var element;
if (randomIndex === 0) {
  element = document.getElementById("firstHiddenBtn");
} else if (randomIndex === 1) {
  element = document.getElementById("secondHiddenBtn");
} else {
  element = document.getElementById("thirdHiddenBtn");
}
var messageElement = document.getElementById("message");
var button1 = document.getElementById("firstHiddenBtn");
var button2 = document.getElementById("secondHiddenBtn");
var button3 = document.getElementById("thirdHiddenBtn");
button1.addEventListener("click", function() {
    if(element === button1) {
       alert("Winner");
    } else {
       alert("Loser");
    }
});
button2.addEventListener("click", function() {
    if(element === button2) {
       alert("Winner");
    } else {
       alert("Loser");
    }
});
button3.addEventListener("click", function() {
    if(element === button3) {
        alert("Winner");
    } else {
        alert("Loser");
    }
});
