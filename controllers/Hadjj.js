const Hajj =require('../models/Hajj')
const {StatusCodes}=require('http-status-codes');
const AllRegisters =async(req,res)=>{
    try {
        const registers= await Hajj.find()
       return res.status(StatusCodes.OK).json({registers})
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
}
const AddRegistration = async (req, res) => {
    try {

        if (!req.user?.email) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Unauthorized: email missing' });
        }
     console.log({...req.body})
        req.body.email = req.user.email;

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

module.exports={AllRegisters,AddRegistration,DeleteRegistration}