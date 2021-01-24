require('../connection');
const Product = require('../models/Products');

async function main() {
   const products = await Product.find({name:'keyboard'});
   console.log(products);
}

main()