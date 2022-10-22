const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");
// const { options } = require("joi");
dotenv.config({ path: path.join(__dirname, "../../.env") });
 
const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "test")
      .required(),
    HOST: Joi.string(),
    PORT: Joi.number().default(8000),
    MONGODB_URL: Joi.string().required().description("Mongo DB url"),
    JWT_SECRET: Joi.string().required().description("JWT secret key"),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number()
      .default(30)
      .description("minutes after which access tokens expire"),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.number()
      .default(30)
      .description("days after which refresh tokens expire"),
    JWT_RESET_PASSWORD_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description("minutes after which reset password token expires"),
    JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description("minutes after which verify email token expires"),
    SMTP_HOST: Joi.string().description("server that will send the emails"),
    SMTP_PORT: Joi.number().description("port to connect to the email server"),
    SMTP_USERNAME: Joi.string().description("username for email server"),
    SMTP_PASSWORD: Joi.string().description("password for email server"),
    EMAIL_FROM: Joi.string().description(
      "the from field in the emails sent by the app"
    ),
  })
  .unknown();
const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
module.exports = {
  env: envVars.NODE_ENV,
  HOST: envVars.HOST,
  PORT: envVars.PORT,
  mongoose: {
    url: envVars.MONGODB_URL,
    options: {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
    },
  },
  // authorization
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes:
      envVars.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
    verifyEmailExpirationMinutes: envVars.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
  },
  // email for verification
  email: {
    clientId:
      "815598502194-rh9gqk451ne9psrkumtpvuehn8ip80sh.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken:
      "1//04QCDepjTPwE8CgYIARAAGAQSNwF-L9IrnCq6ngelt0vcnbkLaV0iunqbqDm2RMKpRK2krmR-yMRjgVEJk0s8EeWlbX4h5CQfzyQ",
    Redirect_url: "https://developers.google.com/oauthplayground",
    smtp: {
      // host: envVars.SMTP_HOST,
      // port: envVars.SMTP_PORT,
      // port: 465,
      // secure: true,
      // service: "SendPulse", // "Gmail",
      // secureConnection: false,
      auth: {
        user: envVars.SMTP_USERNAME,
        pass: envVars.SMTP_PASSWORD,
      },
      // tls: {
      //   // do not fail on invalid certs
      //   rejectUnauthorized: false,
      //   ciphers: "SSLv3",
      // },
    },
    from: envVars.EMAIL_FROM,
  },
};
