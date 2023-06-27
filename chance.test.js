const {Chance} = require("./chance")

describe('Chance...', () => {
    test('is equal to a chance with the same likelihood', () => {
        expect(new Chance(1,6).equals(new Chance(1,6))).toBe(true);
    })
})