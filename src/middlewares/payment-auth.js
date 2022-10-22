// const passport = require("jwt");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const config = require("../config/config");
 
// const { roleRights } = require("../config/roles");
 
const jwt = require("jsonwebtoken");
const paymentAuth =async (receivedToken)  => {
    
    
   return jwt.verify(
      receivedToken,
      config.jwt.secret,
      async function (err, decode) {
        if (err) {
          throw (new ApiError(httpStatus.UNAUTHORIZED, "Forbidden"));
        } else {
         return decode["id"];
        }
      }
    );
  };
  module.exports = paymentAuth;