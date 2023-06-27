class Chance{
    constructor(likelihood){
        this._likelihood = likelihood;
    }

    equals(other){
        return other._likelihood == this._likelihood;
    }

    not() {
        return new Chance(1-this._likelihood);
    }
}

const CERTAIN = new Chance(1);
const EQUALLY_LIKELY = new Chance(0.5);
const IMPOSSIBLE = new Chance(0);

module.exports = {Chance, CERTAIN, EQUALLY_LIKELY, IMPOSSIBLE}