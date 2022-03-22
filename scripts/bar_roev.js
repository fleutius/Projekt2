class Dice {
    constructor(name) {
        this.name = name;
        this.locked = false;
        this.value ;

    }

    // Dice toggle method
    toggle() {
        this.locked = !this.locked;
    }

    showSelf() {
        console.log(this.locked);
    }
        
}

var die1 = new Dice('die1');
die1.showSelf;

/*
document.getElementById("button").onclick = rollDice;
function rollDice() {
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var die3 = document.getElementById("die3");
    var die4 = document.getElementById("die4");
    var die5 = document.getElementById("die5");
    var die6 = document.getElementById("die6");
    var status = document.getElementById("status");

    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var d3 = Math.floor(Math.random() * 6) + 1;
    var d4 = Math.floor(Math.random() * 6) + 1;
    var d5 = Math.floor(Math.random() * 6) + 1;
    var d6 = Math.floor(Math.random() * 6) + 1;


    var diceTotal = d1 + d2 + d3 + d4 + d5 + d6;

    die1.innerHTML = d1;
    die2.innerHTML = d2;
    die3.innerHTML = d3;
    die4.innerHTML = d4;
    die5.innerHTML = d5;
    die6.innerHTML = d6;
    status.innerHTML = "You rolled "+diceTotal+".";
    var diceList = [die1, die2, die3, die4, die5, die6]  
    
    function checkValue {
        var el;
        var prefix = 'die';
        for (var i = 0; el = document.getElementById(prefix + i); ++1) {

        }
    }

    diceList.forEach(checkValue);
    
    function checkValue(item) {
        if (item == 2) {
            item.style.backgroundColor = "red";
        } else if (working != 2) {
            item.style.backgroundColor = "lightgray";
        }
    }
    */
}