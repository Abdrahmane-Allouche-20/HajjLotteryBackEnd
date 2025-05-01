const mongoose =require('mongoose')
require('dns').setServers(['8.8.8.8', '8.8.4.4']);
const ConnectDB=(URI)=>{
    return mongoose.connect(URI)
    .then(()=>{console.log("connected to database")}).
    catch((error)=>{
        console.log('didnt work')
        console.log(error.message)})

}

module.exports = ConnectDB;