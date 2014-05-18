//Lesopdracht 1
var test1 = 20;
var test2 = test1;

test1 += 20;

//console.log(test1);
//console.log(test2);


//Lesopdracht 2
var appels = {
    amount: 40
}

//console.log(appels.amount);

var peren = appels;

//console.log(peren.amount);

appels.amount = 60;

//console.log(peren.amount);


//Lesopdracht 3
function amount(){
    var count = 0;

    for(i=0; i<arguments.length; i++){
        count += arguments[i];
        //console.log(count);
    }
}

var bereking = amount(2, 2, 2, 1, 3);
//console.log(bereking);

//Lesopdracht 4

function input(a){
    var action = a;
    var arrayMessage = [];

    for(i=0; i<arguments.length; i++){
        arrayMessage.push(arguments[i]);
    }

    action(arrayMessage);
}

console.log(input("appels", "peren", "sinaasappels"));