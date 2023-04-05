var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
  const UserSchema = new mongoose.Schema({

    name: {//name oof the products
        type : String,
        required : true, 
    },
    email: {//name oof the products
     type : String,
     required : true, 
 },
 phone:{
  type :String,
  required : true,
 },
    password: {//quantity avliable 
     type :String,
     required : true,
    },
    about:{
     type :String,
    },
    token: {
     type:String
     },
     avliable:{
      type:String
     }
     
  });
  UserSchema.pre("save",async function (next) {
  if(!this.isModified('password'))return next();
  this.password =await bcrypt(this.password,12)
  next();
  }) 
  UserSchema.method.correctPassword= async function (candidatePassword,userpassword){
  return await bcrypt(candidatePassword,userpassword);
  }
  
  const User= mongoose.model('Doctor',UserSchema );
  module.exports =Doctor;