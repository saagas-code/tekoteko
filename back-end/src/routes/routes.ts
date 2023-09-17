import { Router } from "express"
import HelloWorld from "../services/HelloWorld"


const routes = Router()

routes.get("/", HelloWorld);

export default routes