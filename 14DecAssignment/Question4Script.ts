class Item{
    itemId:number;
    itemName:string;
    itemPrice:number;
    category:string;
    constructor(itemId:number,itemName:string,itemPrice:number,category:string)
    {
        this.itemId=itemId;
        this.itemName=itemName;
        this.itemPrice=itemPrice;
        this.category=category;
    }
}
let result=():Item =>{
    let item=new Item(1001,"Apple",100,"fruit");
    return item;
}

console.log(result());