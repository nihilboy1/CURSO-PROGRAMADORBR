const mongoose = require("mongoose")

const user_schema = mongoose.Schema(
    {
        name: {type:String, required:true, minlength:4, maxlength:20},
        email: {type:String,required:true},
        password: {type: String, required:true},
        created_at: {type: Date, default: Date.now},
        admin: {type:Boolean, default: false}
    }
)


module.exports = mongoose.model("users", user_schema)