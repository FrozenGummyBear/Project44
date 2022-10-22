// const passport = require("jwt");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const config = require("../config/config");
const { getUserById } = require("../services/user.service");
const express = require("express");
const jwt = require("jsonwebtoken");

function isObject(o) {
	// return o instanceof Object && o.constructor === Object;
	return o === null ||
		Array.isArray(o) ||
		typeof o == "function" ||
		o?.constructor === Date
		? false
		: typeof o == "object";
}
const setNestedKey = (obj, path, value) => {
	if (path.length === 1) {
		obj[path] = value;
		return;
	}
	console.log("isObejct", path[0], ":data:", isObject(obj[path[0]]));
	if (!isObject(obj[path[0]])) obj[path[0]] = {};
	return setNestedKey(obj[path[0]], path.slice(1), value);
};
const auth =
	(right = [], path = []) =>
	async (req, res, next) => {
		const receivedToken = req.headers.authorization;
		console.log("Incoming auth:", req.headers.authorization);
		jwt.verify(receivedToken, config.jwt.secret, async function (err, decode) {
			if (err) {
				console.log("error ocured during decode:", err);
				next(new ApiError(httpStatus.UNAUTHORIZED, "Forbidden"));
				// throw new ApiError(httpStatus.UNAUTHORIZED, "Forbidden");
				// next();
			} else {
				//knkk
				req.user = await getUserById(decode["sub"]);
				const value = req.user["_id"].toString();
				if (path.length != 0) setNestedKey(req, path, value);
				// console.log("final user:", req.user);
				console.log("final body:", req["body"]);

				if (right.length != 0 && right && !right.includes(req.user["role"]))
					next(new ApiError(httpStatus.UNAUTHORIZED, "Forbidden"));
				// throw new ApiError(httpStatus.UNAUTHORIZED, "Forbidden");

				next();
			}
		});
	};

module.exports = auth;

// // const passport = require("jwt");
// const httpStatus = require("http-status");
// const ApiError = require("../utils/ApiError");
// const config = require("../config/config");
// const { getUserById } = require("../services/user.service");
// // const { roleRights } = require("../config/roles");
// const express = require("express");
// const jwt = require("jsonwebtoken");

// const verifyCallback =
//   (req, resolve, reject, requiredRights) => async (err, user, info) => {
//     if (err || info || !user) {
//       return reject(
//         new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate")
//       );
//     }
//     req.user = user;
//     //public
//     if (requiredRights.length) {
//       const userRights = roleRights.get(user.role);
//       const hasRequiredRights = requiredRights.every((requiredRight) =>
//         userRights.includes(requiredRight)
//       );
//       if (!hasRequiredRights && req.params.userId !== user.id) {
//         return reject(new ApiError(httpStatus.FORBIDDEN, "Forbidden"));
//       }
//     }

//     resolve();
//   };

// const auth1 =
//   (...requiredRights) =>
//   async (req, res, next) => {
//     return new Promise((resolve, reject) => {
//       passport.authenticate(
//         "jwt",
//         { session: false },
//         verifyCallback(req, resolve, reject, requiredRights)
//       )(req, res, next);
//     })
//       .then(() => next())
//       .catch((err) => next(err));
//   };

// // module.exports = auth;

// const auth = (right) => async (req, res, next) => {
//   const receivedToken = req.headers.authorization.split(" ")[1];

//   await jwt.verify(
//     receivedToken,
//     config.jwt.secret,
//     async function (err, decode) {
//       if (err) {
//         //
//         next(new ApiError(httpStatus.UNAUTHORIZED, "Forbidden"));
//       } else {
//         //knkk
//         req.user = await getUserById(decode["sub"]);
//         if(right&&!right.includes(req.user['role']))next(new ApiError(httpStatus.UNAUTHORIZED, "Forbidden"));
//         next();
//       }
//     }
//   );
// };
// module.exports = auth;
