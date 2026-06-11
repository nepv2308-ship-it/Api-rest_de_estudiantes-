
import express from "express";

//Crear instancia de express
const app = express();

//Definir puerto
const PORT = 5000

//especificar que todo sera json
app.use(express.json());

//crear mi primer endpoint
app.get("/test", (req, res) => {
    res.status(200).json({ message: "todo chivo, no te estreses 👌" });
});
//Endponit 
app.get("/", (req, res) => {
    //Buscar en la base de Datos 
    console.log("Alguien consulto el Endpoint")
    res.status(200).json({ message: "EndPoint de obtener funcionando 👌" });
});
app.post("/create", (req, res) => {
    const { name, age } = req.body
    if (!name || !age) {
        return res.status(400).json({ message: "Debe enviar nombre y edad" })
    }
    res.status(201).json({ message: `el usuario ${name} de ${age} se ha creado` });
});
app.put("/update/:id", (req, res) => {
    const { id } = req.params
    const { name, age } = req.body
    if (!name || !age) {
        return res.status(400).json({ message: "Debe enviar nombre y edad" })
    }
    res.status(200).json({ message: `el usuario ${name} de ${age} se ha actualizado` });
})
app.delete("/delete/:id", (req, res) => {
    const { id } = req.params
    res.status(200).json({ message: `el usuario con id ${id} se ha eliminado` });
})
//Crear el servidor 
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});

