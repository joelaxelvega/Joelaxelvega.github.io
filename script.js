function advice(){
    alert("Remember to let the light in the room turned on when watching movies or series , to avoid eye pain. And also , don't forget the popcorn!")
}

//WIP
var quote=["The man who passes the sentence should swing the sword.","The things I do for love.","The next time you raise a hand to me will be the last time you have hands!","It's the family name that lives on. It's all that lives on.","When you play the game of thrones, you win or you die.","I learned how to die a long time ago.","When dead men and worse come hunting … you think it matters who sits on the Iron Throne?","The Mad King did as he liked. Has your uncle Jaime ever told you what happened to him?","Turn us away, and we will burn you first.","A girl gives a man his own name?","Your joy will turn to ashes in your mouth.","We'll come out behind them and f--- them in their arses!","Neither gods nor men will ever compel me to let you turn Casterly Rock into your whorehouse.","I prayed to the gods 'Take him away, make him die.","A dragon is not a slave.","Burn them all.","Chaos isn't a pit. Chaos is a ladder.","You'll be f---ing your own bride with a wooden cock.","If you ever call me sister again, I'll have you strangled in your sleep.","The Lannisters send their regards."]

function quotes(){
    var rand = quote[Math.floor(Math.random() * quote.length)];      document.getElementById("random").innerText=rand
}

var countDownDate = new Date("April 22, 2019 15:30:00").getTime();

function slow() {
  var now = new Date().getTime();
  var time = countDownDate - now;
  var days = Math.floor(time / (1000 * 60 * 60 * 24));
  var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);

var text =document.getElementById("date");
var text1=document.getElementById("clock");
text.innerHTML = "Season 8 Episode 1: Released! <br><br>Next Episode: "+days + " Days " + hours + " Hour "+ minutes + " Min "+ seconds + " Sec ";
clock.innerHTML="Next Episode: "+ days + " Days " + hours + " Hour "+ minutes + " Min "+ seconds + " Sec ";

}

setInterval(slow,1000)


function loader(){
    document.getElementById("bring").style.transform="scale(0)";
}
setTimeout(loader,1000)
