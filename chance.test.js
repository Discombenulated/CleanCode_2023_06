const {Chance} = require("./chance")

describe('Chance...', () => {
    test('is equal to a chance with the same likelihood', () => {
        expect(new Chance(0.5).equals(new Chance(0.5))).toBe(true);
    })

    test('is equal to a chance with the same likelihood', () => {
        expect(new Chance(1).equals(new Chance(0))).not.toBe(true);
    })
})