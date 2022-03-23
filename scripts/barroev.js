
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
            return this.value = Math.floor(Math.random() * 6) + 1;
        }
    }

    getValue() {
        return this.value;
    }
        
}
var die1 = document.getElementById("die1");
var die2 = document.getElementById("die2");
var die3 = document.getElementById("die3");
var die4 = document.getElementById("die4");
var die5 = document.getElementById("die5");
var die6 = document.getElementById("die6");
var status = document.getElementById("status");
var d1 = new Dice("d1");
var d2 = new Dice("d2");
var d3 = new Dice("d3");
var d4 = new Dice("d4");
var d5 = new Dice("d5");
var d6 = new Dice("d6");
var totalSum = 0;





function rollDice() { 
    var turnRolls = []
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var die3 = document.getElementById("die3");
    var die4 = document.getElementById("die4");
    var die5 = document.getElementById("die5");
    var die6 = document.getElementById("die6");
    var status = document.getElementById("status");
    var status2 = document.getElementById("status2");
    var status3 = document.getElementById("status3");
    var activeDice = [d1.name, d2.name, d3.name, d4.name, d5.name, d6.name]
    for (let i = 0; i < activeDice.length; i++) {
        if (activeDice[i].locked==false){
            var usableDice = [] + activeDice[i]; 
        }
    }

    }
        d1.rollDie();
        if (d1.value == 2 || d1.value == 5){
            d1.locked = true;
            die1.style.backgroundColor="red";
            
        }  
        else{die1.style.backgroundColor="lightgray"}
        turnRolls.push(d1.value);

        d2.rollDie();
        if (d2.value == 2 || d2.value == 5){
            d2.locked = true;
            die2.style.backgroundColor="red"
        }
        else{die2.style.backgroundColor="lightgray"}
        turnRolls.push(d2.value);

        d3.rollDie();
        if (d3.value == 2 || d3.value == 5){
            d3.locked = true;
            die3.style.backgroundColor="red"
        }
        else{die3.style.backgroundColor="lightgray"}
        turnRolls.push(d3.value);

        d4.rollDie();
        if (d4.value == 2 || d4.value == 5){
            d4.locked = true;
            die4.style.backgroundColor="red"
        }
        else{die4.style.backgroundColor="lightgray"}
        turnRolls.push(d4.value);

        d5.rollDie();
        if (d5.value == 2 || d5.value == 5){
            d5.locked = true;
            die5.style.backgroundColor="red"
        }
        else{die5.style.backgroundColor="lightgray"}
        turnRolls.push(d5.value);

        d6.rollDie();
        if (d6.value == 2 || d6.value == 5){
            d6.locked = true;
            die6.style.backgroundColor="red"
        }
        else{die6.style.backgroundColor="lightgray"}
        turnRolls.push(d6.value);

        if(turnRolls.includes(2)){
            turnRolls=[]
            turnSum = 0
            status3.innerHTML=turnSum;
        }
        else if (turnRolls.includes(5)){
            turnRolls=[]
            turnSum = 0
            status3.innerHTML=turnSum;
        }
        else {
            let turnSum = 0;

            for (let i = 0; i < turnRolls.length; i++) {
                turnSum += turnRolls[i];
            }
            totalSum += turnSum;
            turnSum = 0;
            status3.innerHTML=totalSum;
        }

        if (d1.locked==true && d2.locked==true && d3.locked==true && d4.locked==true && d5.locked==true && d6.locked==true){
            status.innerHTML = "slut"
        }
        else {
            status.innerHTML = "You rolled "+diceTotal+".";
            document.cookie
    }


  

    var diceTotal = d1.value + d2.value + d3.value + d4.value + d5.value + d6.value;

    die1.innerHTML = d1.value;
    die2.innerHTML = d2.value;
    die3.innerHTML = d3.value;
    die4.innerHTML = d4.value;
    die5.innerHTML = d5.value;
    die6.innerHTML = d6.value;
}



/*
    const diceList = [d1, d2, d3, d4, d5, d6];
    activeDice = [];
    prefix = "die";


    for (let i = 0; i < diceList.lenght+1; i++) {
        if (diceList[i].locked == false) {
            activeDice.push(diceList[i]);
            diceList[i].rollDie;
            this["die"+i] = document.getElementById("die"+i);
            this["die"+i].innerHTML = diceList[i].value;
        }
        else {
            diceList[i].rollDie();
            this["die"+i] = document.getElementById("die"+i);
            this["die"+i].innerHTML = diceList[i].value;}


    }
*/