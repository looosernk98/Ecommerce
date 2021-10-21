
class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statuscode = statuscode;

        Error.captureStackTrace(this,this.constructor)
    }
    
}

module.exports = ErrorHandler