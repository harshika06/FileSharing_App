import mongoose from 'mongoose';

const DBconnection = async() =>
 {

    const MONGODB_URI = `mongodb://harshikasaxenacs20:82zEF2JSgzi1P7sd@ac-e1yvdkz-shard-00-00.zuywhjm.mongodb.net:27017,ac-e1yvdkz-shard-00-01.zuywhjm.mongodb.net:27017,ac-e1yvdkz-shard-00-02.zuywhjm.mongodb.net:27017/?ssl=true&replicaSet=atlas-885gk9-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       await mongoose.connect(MONGODB_URI,{useNewUrlParser :true});
        console.log('Connection success');

    }catch(error)
    {
        console.log('Error While connecting with the database',error.message);
    }
}

export default DBconnection;