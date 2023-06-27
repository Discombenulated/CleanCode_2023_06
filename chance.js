class Chance{
    constructor(likelihood){
        this._likelihood = likelihood;
    }

    equals(other){
        return other._likelihood == this._likelihood;
    }
}

module.exports = {Chance}