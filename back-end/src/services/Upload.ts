import { Request, Response } from "express";

const Upload = async (req: Request, res: Response) => {
  console.log("test", req.file)

  if (!req.file) {
    return res.status(400).send('Nenhum arquivo foi enviado.');
  }

  return res.json({ result: "Hello world !" });
};

export default Upload;
