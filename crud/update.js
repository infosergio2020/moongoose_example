require('../connection');

const User = require('../models/Users');

const someFunction = async () =>{
  const user =await User.findOne({username:'jeff'});
  console.log(user);
  user.password = 'NuevaContraseña';
  user.save();
}

const otherFunction = async () => {
    const user = await User.findOneAndUpdate({username:'claudio'},{
        name: 'Gordon Claudio'
    }, {new: true});
    console.log(user);
}

async function updateUser(){
    const user = await User.update({username:'hector'},{password:'contraseñaSegura'});

    console.log(user);
}

// updateUser();
// someFunction();
otherFunction();