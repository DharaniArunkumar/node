const buffer=new Buffer.from('Hello World')
buffer.write('welcome')
console.log(buffer)
console.log(buffer.toJSON())
console.log(buffer.toString())
