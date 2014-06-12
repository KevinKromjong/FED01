/**
 *
 * @param owner
 * @param weight
 * @param cargo
 * @param transport
 * @constructor
 */

function Ship(owner, weight, cargo){
    Transport.call(this, owner, weight);
    this.cargo = cargo;

//    Object.defineProperty(this ,"horn", {
//        get : function(){
//            return "Whaaaaaamp";
//        }
//    });

}

Ship.prototype = Object.create(Transport.prototype, {
    constructor : {
        configurable : true,
        enumerable : true,
        value : Transport,
        writable : true
    }
});

//console.log(Ship.prototype.horn("Whaaaaaamp"));



