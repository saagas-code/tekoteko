import { Request, Response } from "express"

const HelloWorld = async (req: Request, res: Response) => {

  return res.json({result: "Hello world !"})
}

export default HelloWorld