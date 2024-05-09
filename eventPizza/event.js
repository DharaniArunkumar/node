const EventEmitter=require('node:events')
const event=new EventEmitter()
event.on('order-pizza',(size,toppings)=>{
    console.log(`Pizza is ordered with ${size} and with the toppings ${toppings}`)
})
event.on('order-pizza',(size)=>{
    if(size === 'large'){
        console.log("Free Drink")
    }
})
event.emit('order-pizza','large','cheese')