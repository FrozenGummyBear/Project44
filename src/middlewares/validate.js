const Joi = require("joi");
const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");

const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ["params", "query", "body"]);
  const object = pick(req, Object.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: "key" }, abortEarly: false })
    .validate(object);

  if (error) {
    // console.log(error.details)

    // const errorMessage = error.details
    //   .map((details) => details.message)
    //   .join(", ");
    let structured = {};
    const errorMessage = error.details.map((details) => {
      details.path.splice(0, 1);
      var object = {};
      // object[ details.path] ='error'
      details.path.reduce(function (o, s) {
        if (details.path.length - 1 === details.path.indexOf(s))
          return (o[s] = details.message.toString().replace(/\"/g, ""));
        return (o[s] = {});
      }, object);
      // structured =object;
      let key = details.path[0];
      structured[key] = structured[key]
        ? { ...structured[key], ...object[key] }
        : object[key];
      //   mapTwo.forEach((k, v) -> mapOne.merge(k, v, (v1,v2) -> {
      //     v1.putAll(v2);
      //     return v1;
      //  }));
      return {
        // structured,
        //  ... details.context,path:details.path,message:details.message.toString().replace(/\"/g,''),
      };
    });

    console.log(structured);
    return next(
      new ApiError(
        httpStatus.BAD_REQUEST,
        JSON.stringify(structured),
        "validation"
      )
    );
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;
