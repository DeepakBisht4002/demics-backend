const errorHandler = (err, req, res, next) => {
  console.error("❌ Error:", err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong, please try again";

  res.status(statusCode).json({
    success: false,
    message,
  });
};

export default errorHandler;
