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

    test('can get a probability for more than one event happening', () => {
        expect(EQUALLY_LIKELY.and(EQUALLY_LIKELY).equals(new Chance(0.25))).toBe(true);
        expect(CERTAIN.and(CERTAIN).equals(CERTAIN)).toBe(true);
        expect(IMPOSSIBLE.and(CERTAIN).equals(IMPOSSIBLE)).toBe(true);
        expect(CERTAIN.and(IMPOSSIBLE).equals(IMPOSSIBLE)).toBe(true);
        expect(CERTAIN.and(EQUALLY_LIKELY).equals(EQUALLY_LIKELY)).toBe(true);
        expect(new Chance(0.4).and(new Chance(0.4)).equals(new Chance(0.16))).toBe(true);
    })

    test('can get a probability for one of many events happening', () => {
        expect(CERTAIN.or(CERTAIN).equals(CERTAIN)).toBe(true);
        expect(CERTAIN.or(IMPOSSIBLE).equals(CERTAIN)).toBe(true);
        expect(EQUALLY_LIKELY.or(EQUALLY_LIKELY).equals(new Chance(0.75))).toBe(true);
        expect(new Chance(0.4).or(new Chance(0.25)).equals(new Chance(0.55))).toBe(true);
    })
})