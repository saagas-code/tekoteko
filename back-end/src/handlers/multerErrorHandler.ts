import { ErrorRequestHandler } from "express";

const multerErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(400);
  if (err.message.startsWith("Type Error")) {
    return res.json({
      error: "Unsupported file type: Allowed types are JPEG and PNG",
    });
  }
  res.json({ error: "An error occurred when trying to upload the file" });
};

export default multerErrorHandler;
