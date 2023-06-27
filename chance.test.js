const {Chance} = require("./chance")

const CERTAIN = new Chance(1);
const EQUALLY_LIKELY = new Chance(0.5);
const IMPOSSIBLE = new Chance(0);

describe('Chance...', () => {
    test('is equal to a chance with the same likelihood', () => {
        expect(EQUALLY_LIKELY.equals(EQUALLY_LIKELY)).toBe(true);
    })

    test('is equal to a chance with the same likelihood', () => {
        expect(CERTAIN.equals(IMPOSSIBLE)).not.toBe(true);
    })
})