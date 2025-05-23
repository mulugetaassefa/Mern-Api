const mongoose =require('mongoose');

const connectedDB =async () => {
    try {
     await mongoose.connect(process.env.MONGO_URI);
    console.log('Mongodb connected');
    } catch (error) {
        console.log('COnnection of db failed :', error.message);
        process.exit(1);
    }
}

module.exports =connectedDB;