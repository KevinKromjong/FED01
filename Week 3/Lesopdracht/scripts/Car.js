/**
 *
 * @param owner
 * @param weight
 * @param licenseplate
 * @constructor
 */

function Car(owner, weight, licenseplate){
    Transport.call(this, owner, weight);
    this.licenseplate = licenseplate;

//    Object.defineProperty(this, "horn", {
//        get : function() {
//            return "beep en beep";
//        },
//        enumerable : true
//    })

};

Car.prototype = Object.create(Transport.prototype, {
    constructor : {
        configurable : true,
        enumerable : true,
        value : Car,
        writable : true
    }
});


//console.log(Car.prototype.horn("Beep beep"));
