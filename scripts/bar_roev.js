
class Dice {
    constructor(name) {
        this.name = name;
        this.locked = false;
        this.value = 0;

    }
 
    // Dice toggle method
    toggle() {
        this.locked = !this.locked;
    }

    showSelf() {
        return this.locked;
    }

    rollDie() {
        if (this.locked == false) {
            this.value = Math.floor(Math.random() * 6) + 1;
        }
    }
        
}







function rollDice() {
    var d1 = new Dice("d1");
    var d2 = new Dice("d2");
    var d3 = new Dice("d3");
    var d4 = new Dice("d4");
    var d5 = new Dice("d5");
    var d6 = new Dice("d6");

    const diceList = [d1, d2, d3, d4, d5, d6];
    activeDice = []
    /*
    for (let i = 0; i < diceList.length; i++) {
        if (diceList[i].locked == false) {
            activeDice.push(diceList[i]);
            diceList[i].rollDie();
            this["die"+i] = document.getElementById("die"+i);
            this["die"+i].innerHTML = diceList[i].value;
        }
        else {            diceList[i].rollDie();
            this["die"+i] = document.getElementById("die"+i);
            this["die"+i].innerHTML = diceList[i].value;}


    }
*/
    diceList.forEach(function(value){
        if (value.locked == false){
            value.rollDie();
            id = value.name;
            document.write(id);
        }
    })
}
   
    /*
    const diceList = [d1.name, d2.name, d3.name, d4.name, d5.name, d6.name];
    let activeDice = diceList.filter(function(value){
        if (value.locked == false){
            return value;
        }

    let dLen = activeDice.length;
    
    for (let i = 0; i < dLen; i++) {

    }
    activeDice.forEach(function(value){
        var die+i++:

        value.rollDie;
        if (value.value == 2){
            value.innerHTML = value.value;
            value.style.backgroundColor = 'red';
            value.toggle();
        }
        else if (value.value == 5){
            value.innerHTML = value.value;
            value.style.backgroundColor = 'red';
            value.toggle();
        }
        else {
            value.innerHTML = value.value;
        }
    })
    });
    var die1 = document.getElementById("die1");
    die1.innerHTML = d1.value;
    

}
*/
console.log("-----");
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
