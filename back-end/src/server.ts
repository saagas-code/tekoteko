import express from "express";
import cors from "cors";
import routes from "./routes/routes";
import multerErrorHandler from "./handlers/multerErrorHandler";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);
app.use(multerErrorHandler);

app.listen(8820, async () => {
  try {
    console.log("Server listening on port 8820");
  } catch (err) {
    console.log(err);
  }
});
