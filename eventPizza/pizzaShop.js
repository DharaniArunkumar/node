const EventEmitter=require('node:events')
class pizzaShop extends EventEmitter{
    constructor(){
        super()
        this.orderNo=0;
    }
    order(size,toppings){
        this.orderNo++;
        this.emit('order',size,toppings);
    }
    DisplayOrder(){
        console.log(`Currently displaying: ${this.orderNo}`);
    }
}
module.exports=pizzaShop