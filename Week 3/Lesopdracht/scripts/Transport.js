function Transport(owner, weight) {
    this.owner = owner;
    this.weight = weight;
};

Transport.prototype.horn = function(text){
    return "Horn: " + text;
};