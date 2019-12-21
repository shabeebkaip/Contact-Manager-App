const User=require('../models/user')
const _=require('lodash')

//localhost:3011/users/register
module.exports.register=(req,res)=>{
    const body=_.pick(req.body,['username','email','password'])
    const user=new User(body)
    user.save()
    .then(user=>{
        res.json(_.pick(user,["_id","username","email"]))
    })
    .catch(err=>{
        res.json(err)
    })
}

//localhost:3011/users/login
module.exports.login=(req,res)=>{
    const body=_.pick(req.body,['email','password'])

    User.findByCredentials(body.email,body.password)
        .then(user=>{
        
            return user.generateToken()
        })
        .then((token)=>{
            res.send({'token':token})
        })
        .catch(err=>{
            res.json(err)
        })
}

//localhost:3011/users/account
module.exports.account=function(req,res){
      const user=req.user
      res.json(_.pick(user,["_id","username","email"]))

}

//localhost:3028/users/logout
module.exports.logout=function(req,res){
    const {user,token}=req
    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
    .then(function(){
        res.send({notice:'successfully logged out'})
    })
    .catch(function(err){
        res.send(err)
    })
}

