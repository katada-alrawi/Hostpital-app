import mongoose from 'mongoose';
import validator from 'validator'; 
import bcrypt from 'bcrypt';



const userSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true,
        minlength: [3, "First name must contain at least 3 characters"]
    },
    lastName: {
        type: String, 
        required: true,
        minlength: [3, "Last name must contain at least 3 characters"]
    },
    email: {
        type: String, 
        required: true,
        validate: [validator.isEmail, "Must be a valid email"] // Corrected import name
    },
    phone: {
        type: String, 
        required: true,
        minlength: [7, "Phone must be at least 7 characters long"],
        maxlength: [12, "Phone cannot be longer than 12 characters"]
    },
    
    nic: {
        type: String, 
        required: true,
        minlength: [13, "Nic must contain exatct 13"],
        maxlength: [13, "Nic Nic must contain exatct 13"],
    },
    dob: {
        type: Data,
        required : [true, "Dob is required"]
    },
   
        gender:{
            type: String,
            required: true,
            enum: ["Male", "Female"]
        },
        passwords:{
            type: String,
            minlength: [11, "Passwords must contain at least 8 characters"],
            required: true,
            select: false,
        },
        role:{
            type: String, 
            required: true,
            enum: ["Administrator", "Patent", "Doctor"],

        },
        doctorDepartment:{
            type: String,
        },
        docAvatar:{
            public_id: String,
            url: String,
        },
});

userSchema.pre("save", async function (next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);
})




export const User = mongoose.model("User", userSchema);
