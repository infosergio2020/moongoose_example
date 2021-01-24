require('./connection')

const User = require('./models/User');

async function createUsers(){
    const userOne = new User({
        username: 'Diona',
        password: '12345'
    });

    const userTwo = new User({
        username: 'Cameron',
        password: '67890'
    });
    await userOne.save();
    await userTwo.save();
}

createUsers();