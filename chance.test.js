const {Chance, CERTAIN, EQUALLY_LIKELY, IMPOSSIBLE} = require("./chance")

describe('Chance...', () => {
    test('is equal to a chance with the same likelihood', () => {
        expect(new Chance(0.3).equals(new Chance(0.3))).toBe(true);
        expect(EQUALLY_LIKELY.equals(EQUALLY_LIKELY)).toBe(true);
    })

    test('is not equal to a chance with a different likelihood', () => {
        expect(CERTAIN.equals(IMPOSSIBLE)).not.toBe(true);
    })

    test('can use not to get an inverted chance', () => {
        expect(CERTAIN.not().equals(IMPOSSIBLE)).toBe(true);
        expect(IMPOSSIBLE.not().equals(CERTAIN)).toBe(true);
        expect(EQUALLY_LIKELY.not().equals(EQUALLY_LIKELY)).toBe(true);
        expect(CERTAIN.not().not().equals(CERTAIN)).toBe(true);
    })
})