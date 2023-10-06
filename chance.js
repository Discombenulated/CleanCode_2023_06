class Chance{
    constructor(likelihood){
        this._likelihood = likelihood;
    }

    equals(other){
        const THRESHOLD = 0.000001;
        return Math.abs(this._likelihood - other._likelihood) <= THRESHOLD;
    }

    not() {
        return new Chance(CERTAIN._likelihood - this._likelihood);
    }

    and(other) {
        return new Chance(this._likelihood * other._likelihood);
    }

    or(other){
        return this.not().and(other.not()).not();
    }
}

const CERTAIN = new Chance(1);
const EQUALLY_LIKELY = new Chance(0.5);
const IMPOSSIBLE = new Chance(0);

module.exports = {Chance, CERTAIN, EQUALLY_LIKELY, IMPOSSIBLE}