import mongoose from 'mongoose';
import validator from 'validator'; 

const messageSchema = new mongoose.Schema({
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
    
    message: {
        type: String, 
        required: true,
        minlength: [11, "Message must be at least 11 characters long"]
    },
    
});

export const Message = mongoose.model("Message", messageSchema);
