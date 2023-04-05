const Doctor= require("../model/user");
//for creating and saving products in database
const jwt=require("jwt")
module.exports.create = async(req, res)=>{
 console.log(req.body)
  //product.save();
  try{
   const doc=new Doctor(req.body);
   await user.save();
   const alluser=await Doctor.find(req.body.email);
   res.render('dashbord',{
    user:doc
   });
  }catch(e){
   console.log(e)
   return;
  }
};
module.exports.login = async(req, res)=>{
  const {password,repeatPassword}=req.body;
  if(password!=repeatPassword)return new Error("Invalid password")
  const user=await Doctor.findOne(req.body.email);
  const correct=Doctor.correctPassword(password,user.password);
  if(!user||!correct)return new Error("Invalid user or password")
  user.token=token;

 res.render('dashbord');
}
module.exports.dashboard = async(req, res)=>{
 try{
  const user=await Doctor.find(req.body.email);
  res.render('dashbord',{
   user: user
  });
 }catch(e){
  console.log(e)
  return;
 }
}

module.exports.addUser = async(req, res)=>{
 try{
  const user=new Doctor(req.body);
  await user.save();
  const findAlluser=await Doctor.find(req.body.email);
  return res.render('dashbord',{
   user: findAlluser
  });
 }catch(e){
  console.log(e)
  return;
 }
}

module.exports.appointment = async(req, res)=>{
 try{
  const user=await Doctor.find(req.params.id);
  if(user.avliable){
  return res.send("your appointment is book")
  }

 }catch(e){
  console.log(e)
  return;
 }
 res.render('dashbord');
}


