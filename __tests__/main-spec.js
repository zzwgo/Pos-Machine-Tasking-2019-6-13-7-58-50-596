const ob = require('../main');
const isItemExist = ob.isItemExist;
const calculatePrices=ob.calculatePrices
const createReceipt=ob.createReceipt
// it ('Should be true when item input [0001] ', () => {
//     expect(isItemExist(['0001'])).toBe(true);
// });
// it ('Should be true when item input [0001,0001] ', () => {
//     expect(isItemExist(['0001','0001'])).toBe(true);
// });
// it ('Should be true when item input [0001,0000]', () => {
//     expect(isItemExist(['0001','00000'])).toBe(false);
// });

// it ('Should get itemsDetails and total_cost=3  when item input [0001]', () => {
//     expect(calculatePrices(['0001'])).toEqual({
//         itemsDetails: [{
//             detail: { "id": "0001", "name": "Coca Cola", "price": 3 },
//             count: 1,
//             total: 3
//         }],
//         total_cost: 3
//     });
// });

// it ('Should get itemsDetails and total_cost=3  when item input [0001]', () => {
//     expect(calculatePrices(['0001','0002'])).toEqual({
//         itemsDetails: [{
//             detail: { "id": "0001", "name": "Coca Cola", "price": 3 },
//             count: 1,
//             total: 3
//         },
//         {
//             detail: { "id": "0002", "name": "Diet Coke", "price": 4 },
//             count: 1,
//             total: 4
//         }],
//         total_cost: 7
//     });
// });

it('Should print recept ', () => {
    expect(createReceipt(true, [{
        detail: { "id": "0001", "name": "Coca Cola", "price": 3 },
        count: 1,
        total: 3
    },
    {
        detail: { "id": "0002", "name": "Diet Coke", "price": 4 },
        count: 1,
        total: 4
    }], 7)).toBe(`Receipts\n`
        + `------------------------------------------------------------\n`
        + `Coca Cola\t\t1\t3\nDiet Coke\t\t1\t4\n`
        + `------------------------------------------------------------\nPrice: 7`)
})

it('Should print recept ', () => {
    expect(createReceipt(false, [{
        detail: { "id": "0001", "name": "Coca Cola", "price": 3 },
        count: 1,
        total: 3
    },
    {
        detail: { "id": "0002", "name": "Diet Coke", "price": 4 },
        count: 1,
        total: 4
    }], 7)).toBe("[ERROR]: Item not exist")
})
