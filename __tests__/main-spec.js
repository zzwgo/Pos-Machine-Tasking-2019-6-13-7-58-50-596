const ob = require('../main');
const isItemExits = ob.isItemExits;
const calculatePrices=ob.calculatePrices

// it ('Should be true when item input [0001] ', () => {
//     expect(isItemExits(['0001'])).toBe(true);
// });
// it ('Should be true when item input [0001,0001] ', () => {
//     expect(isItemExits(['0001','0001'])).toBe(true);
// });
// it ('Should be true when item input [0001,0000]', () => {
//     expect(isItemExits(['0001','00000'])).toBe(false);
// });

it ('Should get itemsDetails and total_cost=3  when item input [0001]', () => {
    expect(calculatePrices(['0001'])).toEqual({
        itemsDetails: [{
            detail: { "id": "0001", "name": "Coca Cola", "price": 3 },
            count: 1,
            total: 3
        }],
        total_cost: 3
    });
});

it ('Should get itemsDetails and total_cost=3  when item input [0001]', () => {
    expect(calculatePrices(['0001','0002'])).toEqual({
        itemsDetails: [{
            detail: { "id": "0001", "name": "Coca Cola", "price": 3 },
            count: 1,
            total: 3
        },
        {
            detail: { "id": "0002", "name": "Diet Coke", "price": 4 },
            count: 1,
            total: 4
        }],
        total_cost: 7
    });
});