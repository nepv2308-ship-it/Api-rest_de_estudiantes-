import { Router } from "express";
import prisma from '../lib/prisma.js';

const userRouter = Router();

userRouter.get("/", async (req, res) => {
    // Buscar en la base de Datos
    const students = await prisma.student.findMany();
    res.status(200).json({ sucess: true, data: students });
});

// SOLO UN POST /create
userRouter.post("/create", async (req, res) => {
    const { StudentCode, name, lastname, email, password, phone } = req.body;

    if (!StudentCode || !name || !lastname || !email || !password || !phone) {
        return res.status(400).json({ message: "Debe enviar todos los datos del estudiante" });
    }

    try {
        const newStudent = await prisma.student.create({
            data: {
                SudentCode: StudentCode,
                firstName: name,
                lastName: lastname,
                email: email,
                password: password,
                phone: phone
            }


        });

        return res.status(201).json({
            message: "Nuevo Estudiante creado exitosamente",
            data: newStudent
        });

    } catch (error) {
        console.error("Error en Prisma:", error);
        return res.status(500).json({ message: "Error interno del servidor al crear estudiante" });
    }
});

userRouter.put("/update/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const { StudentCode, name, lastname, email, password, phone } = req.body;

    try {
        const updatedStudent = await prisma.student.update({
            where: {
                id: id
            },
            data: {
                SudentCode: StudentCode,
                firstName: name,
                lastName: lastname,
                email: email,
                password: password,
                phone: phone
            }
        });
        return res.status(200).json({
            message: "Estudiante actualizado exitosamente",
            data: updatedStudent
        });
    } catch (error) {
        console.error("Error en Prisma:", error);
        return res.status(500).json({ message: "Error interno del servidor al actualizar estudiante" });
    }
});

userRouter.delete("/delete/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const deletedStudent = await prisma.student.delete({
            where: {
                id: id
            }
        });
        return res.status(200).json({
            message: "Estudiante eliminado exitosamente",
            data: deletedStudent
        });
    } catch (error) {
        console.error("Error en Prisma:", error);
        return res.status(500).json({ message: "Error interno del servidor al eliminar estudiante" });
    }
});

export default userRouter;