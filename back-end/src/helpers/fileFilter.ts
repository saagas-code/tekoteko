import { Request } from "express";

const fileFilter = (req: Request, file: Express.Multer.File, cb: any) => {
  const allowedMimeTypes = ["image/jpeg", "image/png"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    return cb(null, true);
  }
  cb(new Error("Type Error"), false);
};

export default fileFilter
