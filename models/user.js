const mongoose = require("mongoose");
const schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

// ye by default hi username and password ko add kr dega with hashedvalue and salt to apne ko isme username and password ki field nhi add krni padegi schema me
const userSchema = new schema({
    email : {
        type : String,
        required: true,
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);