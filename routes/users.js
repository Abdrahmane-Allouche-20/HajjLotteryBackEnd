const router=require('express').Router()
const {uploadProfilePicture,login,register,getAllUserProfile,deleteUser,deleteAccount}=require('../controllers/users')
const {auth,itsAdmin}=require('../middleware/auth')
const validateRegister = require('../middleware/validateRegister')
const validateLogin =require('../middleware/validateLogin')
const validateMongoId=require('../middleware/validId')
const photoUpload=require('../middleware/photoUpload')
router.route('/login').post(validateLogin,login)
router.route('/register').post(validateRegister,register)
router.route('/picture').post(auth,photoUpload.single('profileImage'),uploadProfilePicture)
router.route('/allUsers').get(itsAdmin,getAllUserProfile)
router.route('/deleteuser/:id').delete(validateMongoId,itsAdmin,deleteUser)
router.route('/deleteAcc/:id').delete(validateMongoId,auth,deleteAccount)
module.exports=router