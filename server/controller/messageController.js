import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { Message } from "../models/messageSchema.js"; 
import ErrorHandler from "../middlewares/errorMiddleware.js";


export const sendMessage = catchAsyncErrors(async (req, res, next) => {
    const { firstName, lastName, email, phone, message } = req.body;

    
    if (!firstName || !lastName || !email || !phone || !message) {
        return next(new ErrorHandler("Fill Full form ", 400));
    }

    try {
        // Create a new message
        const newMessage = await Message.create({
            firstName,
            lastName,
            email,
            phone,
            message,
        });

        res.status(200).json({
            success: true,
            message: "Message created successfully",
            data: newMessage,
        });
    } catch (error) {
        console.error("Error occurred while creating message:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while processing your request",
        });
    }
});
