const router=require('express').Router()
const validateHajj=require('../middleware/validateHajj')
const {auth,itsAdmin} =require('../middleware/auth')
const validateMongoId=require('../middleware/validId')

const {AllRegisters,AddRegistration,DeleteRegistration,SingleRegister}=require('../controllers/Hadjj')
router.route('/').get(AllRegisters).post(validateHajj,auth,AddRegistration)
router.route('/:id').delete(validateMongoId,itsAdmin,DeleteRegistration).get(auth,SingleRegister)
module.exports=router