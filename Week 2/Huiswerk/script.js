var createShip = function(shipName) {
    var ship = {
        shipname : shipName,
        engines : 2
    };

Object.defineProperty(ship, "captain", {
    get : function() {
        return "The captain of " + this.shipname + " is: ";
    },
    enumerable : true,
    configurable : true
});

    return ship;
};


var createCar = function(carName){
    var car = {
        carname : carName,
        wheels: 4
    };

Object.defineProperty(car, "factory", {
   get : function(){
       return "The factory of " + this.carname + " is somewhere in: ";
   },
    enumerable : true,
    configurable : true
});

    return car;
};



var createTransport = function(shipName, carName, captain, factoryPlace){
    var ship = createShip(shipName);
    var car = createCar(carName);



    ship.captainOfShip = captain;
    car.factoryPlace = factoryPlace;

    var captainDesc = Object.getOwnPropertyDescriptor(ship, "captain");
    var captainFunction = captainDesc.get.bind(ship);

    var factoryDesc = Object.getOwnPropertyDescriptor(car, "factory");
    var factoryPlaceFunction = factoryDesc.get.bind(car);

    Object.defineProperty(ship, "captain", {
        get : function() {
            return captainFunction() + this.captainOfShip;
        },

        enumerable : true,
        configurable : true

    });

    Object.defineProperty(car, "factory", {
        get : function(){
            return factoryPlaceFunction() + this.factoryPlace
        },
        enumerable : true,
        configurable : true
    });

    //return car;
    return ship;



};

var transportObjects = createTransport("Titanic", "Volvo", "Edward John Smith", "Munich");