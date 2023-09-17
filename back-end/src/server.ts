import express from "express";
import cors from "cors";
import routes from "./routes/routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(routes);

app.listen(8820, async () => {
  try {
    console.log("Server listening on port 8820")
  } catch (err) {
    console.log(err)
  }
});
