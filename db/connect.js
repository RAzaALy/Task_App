const mongoose = require('mongoose')

const connectDB = async (url) => {
  try{
    return mongoose.connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }).then(() => console.log('db connected succssfully'))
  }catch(err){
    console.log(err);
  }
}

module.exports = connectDB