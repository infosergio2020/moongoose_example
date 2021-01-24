require('../connection');

const User = require('../models/User');

async function getUser(){
    const user = await User.findOne({username:'hector'});
    console.log(user);
}

getUser();