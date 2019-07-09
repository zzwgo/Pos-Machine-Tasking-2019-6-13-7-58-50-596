const DATA_BASE = [
    { "id": "0001", "name": "Coca Cola", "price": 3 },
    { "id": "0002", "name": "Diet Coke", "price": 4 },
    { "id": "0003", "name": "Pepsi-Cola", "price": 5 },
    { "id": "0004", "name": "Mountain Dew", "price": 6 },
    { "id": "0005", "name": "Dr Pepper", "price": 7 },
    { "id": "0006", "name": "Sprite", "price": 8 },
    { "id": "0007", "name": "Diet Pepsi", "price": 9 },
    { "id": "0008", "name": "Diet Mountain Dew", "price": 10 },
    { "id": "0009", "name": "Diet Dr Pepper", "price": 11 },
    { "id": "0010", "name": "Fanta", "price": 12 }
]
function isItemExist (items) {
    var ItemsID=[];
    let exits=false;
    for(var i=0;i<DATA_BASE.length;i++){
        ItemsID.push(DATA_BASE[i].id)
    }
    return items.every(function(item){
       return ItemsID.includes(item)
    })
}

function calculatePrices(items){
    let total_cost=0
    var itemsDetails=[]
    for(let item of items){
       var itemFilter=itemsDetails.find(item=> item.detail.id===item)
       if(!itemFilter){
        var itemFilterDetail=DATA_BASE.find(db=> db.id===item);
           itemsDetails.push({
               detail:itemFilterDetail,
               count:1,
               total:itemFilterDetail.price
           })
           total_cost+=itemFilterDetail.price
       }else{
        itemFilter.count=itemFilter.count+1
        itemFilter.total=itemFilter.total+itemFilter.price
        total_cost+=itemFilter.detail.price
       }
    }
    return {itemsDetails,total_cost}
}

function createReceipt(isItemExist, itemsDetails, total_cost) {
    if (!isItemExist) {
        return '[ERROR]: Item not exist'
    }
    let str = 'Receipts\n------------------------------------------------------------\n'
    for(let item of itemsDetails){
        str += `${item.detail.name}\t\t${item.count}\t${item.total}\n`
    }
    str += `------------------------------------------------------------\nPrice: ${total_cost}`
    return str
}
function printReceipt(items){
    if(isItemExist(items)){
        const {itemsDetails, total_cost} = calculatePrices(items)
        return createReceipt(true, itemsDetails, total_cost)
    }else{
        const {itemsDetails, total_cost}=[]
        return createReceipt(false,itemsDetails,total_cost)
    }
}
module.exports = {
    isItemExist,
    calculatePrices,
    createReceipt,
    printReceipt
};
