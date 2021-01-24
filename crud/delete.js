require('../connection');


const Product = require('../models/Products');
const User = require('../models/Users');

const someFunction = async () =>{
    // const result = await Product.deleteMany({name:'keyboard'}); //borra muchos
    // const result = await Product.deleteOne({name:'laptop hp'}); //busca todos elimina 1
    // const result = await Product.findOneAndDelete({name:'laptop'}); //busca 1  elimina 1
    const result = await Product.findByIdAndDelete('600ddbf796e2420edc18cdd8'); //busca por id de mongodb y lo elimina

    console.log(result);
}

someFunction();