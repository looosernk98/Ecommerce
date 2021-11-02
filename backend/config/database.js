const mongoose = require('mongoose');



const connectDatabase = ()=>{
    mongoose.connect("mongodb+srv://niru:I86AQWLIWT5hg9SU@cluster0.apooo.mongodb.net/Ecommerce",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then((data)=>{
        console.log(`mongoDB connected with server : ${data.connection.host} `)
    })
}

module.exports= connectDatabase