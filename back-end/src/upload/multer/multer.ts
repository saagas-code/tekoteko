import multer from "multer";
import path from "path";
import crypto from "crypto";
import multerS3 from "multer-s3";
import config from "../../../config";
import S3 from "../S3/S3";
import fileFilter from "../../helpers/fileFilter"

const destinationPath = path.join(__dirname, "../../../temp");

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, destinationPath);
    },
    filename: (req, file, callback) => {
      callback(null, `${crypto.randomUUID()}+${file.originalname}`);
    },
  }),
  s3: multerS3({
    s3: S3,
    bucket: process.env.BUCKET_NAME!,
    acl: "public-read",
    contentDisposition: "inline",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      const fileName = `${crypto.randomUUID()}-${file.originalname}`;

      cb(null, fileName);
    },
  }),
};

const storageExport = {
  // @ts-ignore
  storage: storageTypes[config.STORAGE_TYPE],
  fileFilter: fileFilter,
};

export default storageExport;
