class HttpError extends Error {
  constructor(message, statusCode = 400, details = null) {
    super(message);
    this.name = 'HttpError';
    this.statusCode = statusCode;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = HttpError;
