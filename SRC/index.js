import "dotenv/config";
import express from "express";
import userRouter from "./routes/user.routes.js";

//Crear instancia de express
const app = express();
const PORT = process.env.PORT

//especificar que todo sera json
app.use(express.json());

app.use("/", userRouter)


//Crear el servidor 
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});

