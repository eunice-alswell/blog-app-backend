const User = require('../models/userModel')



const userCtrl = {}

//creating user(signup) using post method
userCtrl.createUser = async(req,res)=>{
    try{
        let user = new user(res.body)
        let result = await user.save()
        res.status(201).send({message: 'user is successfully created',result})
    }
    catch{
        console.log(error)
    }
}

//logining user in
userCtrl.loginUser = async(req,res)=>{
    const {email,password} = req.body
    try{
        
        let  user = await user.findAll({email,password})
        res.status(201).send({message: 'user is successfully created',result})
    }
    catch{
        console.log(error)
    }
}

// updating user details using the update method

userCtrl.updateUser = async (req,res) =>{

    const {fullname,email,password} = req.body

    try{
       let user = await User.findOneAndupdate({_id: req.params.id},{fullname,email,password})
        res.status(200).send({message: 'updated successfully',user})
    }
    catch{
        console.log(error)
    }
}

module.exports = userCtrl