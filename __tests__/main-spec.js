const ob = require('../main');
const isItemExits = ob.isItemExits;


it ('Should be true when item input [0001] ', () => {
    expect(isItemExits(['0001'])).toBe(true);
});
it ('Should be true when item input [0001,0001] ', () => {
    expect(isItemExits(['0001','0001'])).toBe(true);
});
it ('Should be true when item input [0001,0000]', () => {
    expect(isItemExits(['0001','00000'])).toBe(false);
});

