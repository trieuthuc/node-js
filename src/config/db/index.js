const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev',{    
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true

    });
        console.log('Ket noi thanh cong voi database')
    }catch(error){
        console.log ('Ket noi voi database that bai ')
    }
}
module.exports = {connect};