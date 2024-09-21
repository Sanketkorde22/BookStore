const  mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

//user model
const userSchema = new Schema({
    email:{
        type: String,
        require: true,
    },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('userSchema', userSchema);
