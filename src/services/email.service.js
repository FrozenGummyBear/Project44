const nodemailer = require("nodemailer");
const config = require("../config/config");

async function send_mail(to, subject, text) {
  // to ="hayelomkiros20@gmail.com";

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 587, false for other ports
    requireTLS: true, // port for secure SMTP
    auth: {
      user: "telemedcine2022@gmail.com",
      pass: "ugylezvhxwwtanfj",
    },
  });

  const msg = {
    // from: config.email.from,
    from: '"Pewpog" <pewpog@gmail.com>',
    to,
    replyTo: "noreply@gmail.com",
    subject,
    html: `</br><p>${text} <p>`,
  };
  console.log("====================================");
  console.log(msg);
  console.log("====================================");

  transporter.sendMail(msg, function (error, result) {
    if (error) {
      console.log("error:", error);
    } else {
      // console.log("result:", result);
      console.log("email connected");
    }
    transporter.close();
  });
}

// send_mail('hayelomkiros20@gmail.com', 'about server', 'server is running well', '00000');

/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @returns {Promise}
 */
const sendEmail = (to, subject, text) => {
  send_mail(to, subject, text);
};
const sendEmail1 = async (to, subject, text, verficationCode) => {
  const msg = {
    from: config.email.from,
    to,
    replyTo: "noreply@gmail.com",
    subject,
    // sender: "eatexcellence@gmail.com",
    // text: `${"verification Code:" + verficationCode}`,
    html: `${"verification Code:" + verficationCode}</br> <p>${text} <p>`,
    // text: `${"verification Code:" + generateOTP(6)}`,
  };

  // const msg = { from: config.email.smtp.auth.user, to, subject, text };

  await transport.sendMail(msg);
};

/**
 * Send reset password email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendResetPasswordEmail = async (to, token) => {
  const subject = "Reset password";
  // replace this url with the link to the reset password page of your front-end app
  // const resetPasswordUrl = `http://link-to-app/reset-password?token=${token}`;

  const resetPasswordUrl = `${process.env.CLIENT_URL}/passwor-reset/${token}`;
  const text = `Dear user,
To reset your password, click on this link: ${resetPasswordUrl}
If you did not request any password resets, then ignore this email.`;
  await sendEmail(to, subject, text);
};

/**
 * Send verification email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendVerificationEmail = async (to, token, verficationCode) => {
  const subject = "Email Verification";
  // replace this url with the link to the email verification page of your front-end app
  const verificationEmailUrl = `${process.env.DEV_PAYMENT_URL}/verify-email?token=${token}`;

  console.log(verficationCode);
  let text = `${"verification Code:" + verficationCode}</br> 
<p>
Dear user,

To verify your email, click on this link: ${verificationEmailUrl}
this rest link will expire in less than hour.
If you did not create an account, then ignore this email.
<p>`;
  await sendEmail(to, subject, text);
};
const sendRecommendation = async (recom) => {
  const subject = "Recommendation";
  let text = `
     <h1> Request  ${recom["status"]} </h1>


     <p>
     <h6> your proposal: </h6>
      <p>${recom["desc"]}</p>
     </p>
   `;

  await sendEmail(recom["email"], subject, text);
};

module.exports = {
  // transport,
  sendEmail,
  sendResetPasswordEmail,
  sendVerificationEmail,
  ////////
  sendRecommendation,
};
