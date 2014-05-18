//Object constructor notation
var athleteOne = new Object();
athleteOne.dayOfBirth = "21 August 1986";
athleteOne.name = "Usain";
athleteOne.surname = "Bolt";
athleteOne.stamina = 100;
athleteOne.strength = 400;
athleteOne.length = 195;

//Object literal notation
var athleteTwo = {
    dayOfBirth : "1 juli 1961",
    name : "Carl",
    surname : "Lewis",
    stamina : 110,
    strength : 450,
    length : 188
};

var createAthlete = function(dayOfBirth, name, surname, stamina, strength, length){
    return {
        dayOfBirth: dayOfBirth,
        name : name,
        surname : surname,
        stamina : stamina,
        strength : strength,
        length : length
    };
}

var kevinKromjong = createAthlete("20 mei 1995", "Kevin", "Kromjong", 100, 500, 185);
var usainBolt = createAthlete("21 August 1986", "Usain", "Bolt", 100, 400, 195);
var carlLewis = createAthlete("1 juli 1961", "Carl", "Lewis", 110, 450, 188);
var koenRaymaekers = createAthlete("31 januari 1980", "Koen", "Raymaekers", 100, 300, 182);