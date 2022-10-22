const ApiError = require("../utils/ApiError");
const multer = require("multer");
const fs = require("fs");

const path = require("path");
const httpStatus = require("http-status");
// const { CloudinaryStorage } = require("multer-storage-cloudinary");

const upload = (dest, mimeType) => {
  const dir = path.join(__dirname, "..", "public", "pewpog", dest);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {
      recursive: true,
    });
  }
  // const now = new Date().toISOString();
  // const date = now.replace(/:/g, "-");
  // const uniqueSuffix = date + "-" + Math.round(Math.random() * 1e9);
  // if (!fs.existsSync(dir)) {
  //   fs.mkdirSync(dir);
  // }
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log("Storage Destination");
      cb(null, path.join(__dirname, "..", "public", "pewpog", dest));
    },
    filename: function (req, file, cb) {
      console.log("Storage fileName");
      const now = new Date().toISOString();
      const date = now.replace(/:/g, "-");
      const uniqueSuffix = date + "-" + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
    },
  });

  return multer({
    storage: storage,
    fileFilter: function fileFilter(req, file, cb) {
      console.log(file, mimeType);

      // const imageTypes = ["image/png", "image/jpg", "image/jpeg"];
      // imageTypes.includes(file.mimetype);
      //  if (file.mimetype.includes("image/"))
      if (file.mimetype.includes(mimeType)) {
        //   //   console.log("from inside multer", file);
        //   req.body.img = file.originalname;
        return cb(null, true);
      } else {
        cb(null, false);
        return cb(
          new ApiError(httpStatus.FORBIDDEN, "Only Images allowed!", "upload")
        );
      }
      // cb(null, true);
    },
  });
};

module.exports = upload;
