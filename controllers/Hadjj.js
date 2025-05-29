const Hajj =require('../models/Hajj')
const {StatusCodes}=require('http-status-codes');
const AllRegisters = async (req, res) => {
  try {
    const registers = await Hajj.find() // add fields you want
    return res.status(StatusCodes.OK).json({ registers });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};
const AddRegistration = async (req, res) => {
    try {

        if (!req.user?.email) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Unauthorized: email missing' });
        }
    
        req.body.email = req.user.email;
        req.body.demandeDe = req.user.userId;
        const person = await Hajj.create({ ...req.body });
        return res.status(StatusCodes.CREATED).json({ person });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
};
const DeleteRegistration =async(req,res)=>{
    try {
        const {id}=req.params
        await Hajj.findByIdAndDelete(id)
        return res.status(StatusCodes.OK).json({message:'deleted'})
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
}
const SingleRegister = async (req, res) => {
  const { id } = req.params; // This is the user ID
  

  try {
    const register = await Hajj.findOne({ demandeDe: id }); // Match user ID
    if (!register) {
      return res.status(StatusCodes.OK).json({ found: false });
    }
    return res.status(StatusCodes.OK).json({ found: true });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};



module.exports={AllRegisters,AddRegistration,DeleteRegistration,SingleRegister}