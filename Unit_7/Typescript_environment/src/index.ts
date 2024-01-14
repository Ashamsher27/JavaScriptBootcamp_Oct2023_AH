import express from "express";
import movieRoutes from "./routes/movies";

const routes = express.Router();

const app = express()

app.use(express.json())
const port = 3000

app.use('/movies', movieRoutes)







app.listen(port, () => console.log("Hello World" + port));

export default routes;

