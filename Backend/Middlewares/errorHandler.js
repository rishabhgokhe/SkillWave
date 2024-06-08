//acts as a error handling middleware it will be excecuted when all routes are done executing
//If an error occurs in a route handler, it is caught by catchAsyncError and passed to the handleError middleware handleError sends a structured JSON response with the error details

function handleError(err, req, res, next) {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Sever Error';
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default handleError;
