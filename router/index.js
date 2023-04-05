const express =require('express');
const router=express.Router();

const UserContoler=require('../controler/index')
router.post('/login',UserContoler.login)//for login
router.post('/addDoctor',UserContoler.addUser)//add all doctor to data base
router.get('/bookAppointment/:id',UserContoler.appointment)//taking appointment
router.get('/removeUser',UserContoler.removeUser)//remove doctos
router.get('/dashboard',UserContoler.dashboard)//main or home page

router.get('/',UserContoler.create);//creating new instance of doctor



//router.get('/:id',productContoler.deleteProduct)
module.exports = router;