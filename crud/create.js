require('../connection');

const Product = require('../models/Products');

const createProduct = async () => {
    const laptopOne = new Product({
        name:'laptop hp',
        description:'hp pavilion 15'
    });
    await laptopOne.save();

    const laptoTwo = new Product({
        name:'laptop lenovo',
        description:'lenovo x1'
    });
    await laptoTwo.save();
}

createProduct();