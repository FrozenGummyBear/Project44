const mongoose = require("mongoose");
const httpStatus = require("http-status");
const config = require("../config/config");
const fs = require("fs");

const ApiError = require("../utils/ApiError");
const deleteFile = (path) => {
  try {
    // console.log('outside');
    // fs.access(path,(err)=>{
    //   if(err){
    //     console.log(err);
    //    console.log('file not found');
    //   }else{

    //      console.log('file:',path,'found');
    //   }
    // })

    fs.unlink(path, function (err) {
      if (err) return console.log(err);
      console.log("file deleted successfully");
    });

    //file removed
  } catch (err) {
    console.error(err);
  }
};
const errorConverter = (err, req, res, next) => {
  console.log("error converter", req.url);
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error
        ? httpStatus.BAD_REQUEST
        : httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
    error = new ApiError(statusCode, message, false, err.stack);
  }
  if (req.files) {
    console.log("inside validation");
    req.files.map((file) => {
      deleteFile(file["path"]);
      return file["filename"];
    });
  }
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  let { statusCode, message, type } = err;

  if (config.env === "production" && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    type,
    // ...(config.env === 'development' && { stack: err.stack }),
  };

  if (config.env === "development") {
    console.log(err);
    console.log("Status Code:", statusCode);
  }

  res.status(statusCode).send(response);
};

module.exports = {
  errorConverter,
  errorHandler,
  deleteFile,
};

// const mongoose = require("mongoose");
// const httpStatus = require("http-status");
// const config = require("../config/config");

// const ApiError = require("../utils/ApiError");

// const errorConverter = (err, req, res, next) => {
//   console.log("error converter",req.url);
//   let error = err;
//   if (!(error instanceof ApiError)) {
//     const statusCode =
//       error.statusCode || error instanceof mongoose.Error
//         ? httpStatus.BAD_REQUEST
//         : httpStatus.INTERNAL_SERVER_ERROR;
//     const message = error.message || httpStatus[statusCode];
//     error = new ApiError(statusCode, message, false, err.stack);
//   }
//   next(error);
// };

// // eslint-disable-next-line no-unused-vars
// const errorHandler = (err, req, res, next) => {

//   let { statusCode, message ,type} = err;

//   if (config.env === "production" && !err.isOperational) {
//     statusCode = httpStatus.INTERNAL_SERVER_ERROR;
//     message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
//   }

//   res.locals.errorMessage = err.message;

//   const response = {
//     code: statusCode,
//     message,
//     type
//     // ...(config.env === 'development' && { stack: err.stack }),
//   };

//   if (config.env === "development") {
//     console.log(err);
//   }

//   res.status(statusCode).send(response);

// };

// module.exports = {
//   errorConverter,
//   errorHandler,
// };
