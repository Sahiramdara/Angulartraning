class Item {
    constructor(itemId, itemName, itemPrice, category) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.category = category;
    }
}
let result = () => {
    let item = new Item(1001, "Apple", 100, "fruit");
    return item;
};
console.log(result());
//# sourceMappingURL=Question4Script.js.map