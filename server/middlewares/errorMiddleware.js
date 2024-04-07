class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "internal server error";
  err.statusCode = err.statusCode || 500;

  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }
  if (err.name === "jsonWebTokenError") {
    const message = "Invalid JSON Web Token , try again later";
    err = new ErrorHandler(message, 400);
  }
  if (err.name === "TokenExpiredError") {
    const message = "Invalid JSON Web Token , try again later";
    err = new ErrorHandler(message, 400);
  }

  if (err.name === "CastError") {
    const message = `invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }
  const errorMessage = err.errors
    ? Object.values(err.errors)
        .map((err) => err.message)
        .join(" ")
    : err.message;

  return res.status(err.statusCode).json({
    success: false,
    message: errorMessage, 
  });
};

export default ErrorHandler;
