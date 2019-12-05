const mongoose = require('mongoose');
const Url = 'mongodb://localhost:27017/EmployeeDB';
const mongoOption = { useNewUrlParser: true };

mongoose.connect(Url, mongoOption, (err) => {
    if(err){
        console.log(`Erron in DB connection : ${err}`);
    }else{
        console.log('MongoDB Connection Succeeded')
    }
});

require('./employee.model');