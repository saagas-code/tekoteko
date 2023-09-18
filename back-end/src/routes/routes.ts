import { Router } from "express"
import HelloWorld from "../services/HelloWorld"
import Upload from "../services/Upload";
import multer from "multer";
import storage from "../upload/multer/multer"


const routes = Router()
const upload = multer(storage)

routes.get("/", HelloWorld);
routes.post("/upload", upload.single("file"), Upload)

export default routes