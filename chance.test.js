const {Chance, CERTAIN, EQUALLY_LIKELY, IMPOSSIBLE} = require("./chance")

describe('Chance...', () => {
    test('is equal to a chance with the same likelihood', () => {
        expect(EQUALLY_LIKELY.equals(EQUALLY_LIKELY)).toBe(true);
    })

    test('is equal to a chance with the same likelihood', () => {
        expect(CERTAIN.equals(IMPOSSIBLE)).not.toBe(true);
    })
})