function createInventoryItem(name, catogry, price) {
return {
    name: name,
    catogry: catogry,
    price: price,
    describeItem: function(){
        console.log(`Item: ${name}, Catogry: ${catogry}, Price: ${price}`)
    }
};
}
function addItemDiscount(inventoryItem , discountPercent){
inventoryItem.discountedPrice = inventoryItem.price - (inventoryItem.price * discountPercent / 100);
inventoryItem.applyDiscount = function() {
    console.log(`Discounted Price for ${this.name}: ₹${this.discountedPrice}`);
  };
  return inventoryItem;
}
const item = createInventoryItem("Laptop", "Electronics", 50000);
item.describeItem();  // Item: Laptop, Category: Electronics, Price: ₹50000

const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();  // Discounted Price for Laptop: ₹45000
