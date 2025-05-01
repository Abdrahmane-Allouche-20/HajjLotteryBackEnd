const mongoose=require('mongoose')
const jwt =require('jsonwebtoken')
const bcrypt=require('bcryptjs')

const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        required:[true,'please provide user name'],
        
    },
    isAdmine:{
      type:Boolean,
      default:false
    },
    email:{
        type:String,
        required:[true,'please provide email'],
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Please provide a valid email',
        ],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
      },
    
},{ timestamps: true })
UserSchema.pre('save',async function(){
  const salt = await bcrypt.genSalt(10)
  const hashPass= await bcrypt.hash(this.password,salt)
  this.password = hashPass;
})
UserSchema.methods.createToken=function(){
  if (!process.env.JWT_SCRT) {
    throw new Error('JWT_SECRET is not defined in the environment variables.');
  }
  return (
    jwt.sign({userId:this._id,username:this.username,email:this.email,isAdmine:this.isAdmine},process.env.JWT_SCRT, { expiresIn: '30d' })
  )
}
UserSchema.methods.comparePassword=async function(password){
const isMatched=await bcrypt.compare(password,this.password)
return isMatched
}
module.exports=mongoose.model('User',UserSchema)