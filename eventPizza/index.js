const pizzaShop=require('./pizzaShop')
const drinkOffer=require('./drinkOffer')
const shop1=new pizzaShop()
const drink=new drinkOffer()
shop1.on('order',(size,toppings)=>{
    console.log(`Ordered a pizza with ${size} and ${toppings}`)
    drink.offer(size)
})
shop1.DisplayOrder()
shop1.order('large','cheese')
shop1.DisplayOrder()
shop1.order('large','cheese')
shop1.DisplayOrder()


// Currently displaying: 0
// Ordered a pizza with large and cheese

// Currently displaying: 0
// Ordered a pizza with large and cheese
// Currently displaying: 1
// Ordered a pizza with large and cheese
// Currently displaying: 2


// Currently displaying: 0
// Ordered a pizza with large and cheese
// Free Drink
// Currently displaying: 1
// Ordered a pizza with large and cheese
// Free Drink
// Currently displaying: 2