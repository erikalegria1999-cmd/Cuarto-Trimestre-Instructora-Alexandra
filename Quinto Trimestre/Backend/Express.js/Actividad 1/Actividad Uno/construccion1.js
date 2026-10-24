const express = require('express');
const construc1 = express();
const PORT = 9000
construc1.use(cors({origin:""}))
construc1.use(express.json())

// construc1.use((req, res, next) => {
//     console.log("Middleware ejecutado")
//     next()
// })
// construc1.use((req, res) => {
//     res.status(404).json({
//         mensaje: "Ruta no encontrada"
//     });
// });

construc1.get("/Bienvenido",(req,res,)=>{
    res.json("Bienvenido")
})
construc1.get("/Informacion",(req,res)=>{
    res.json({
        "Mensaje":"Informacion del servidor",
        "Nombre": "Mi Servidor de estudio",
        "puerto": PORT,
        "Estado": "Activo *.*"
    })
})
construc1.post("/solicitudes", (req, res) => {
    let { nombre, apellido, correo } = req.body;

    if (!nombre || !apellido || !correo.includes("@")||!correo.includes(".")) {
        return res.status(400).json({
            "Mensaje": "Todos los campos son obligatorios",
            "Mensaje": "correo Invalido"
        });
    }

    res.json({
        mensaje: "Solicitud recibida correctamente",
        nombre,
        apellido,
        correo
    });
});

// construc1.post("/solicitudes", (req, res) => {
//     let { nombre, apellido, correo } = req.body;

//     res.json({
//         mensaje: "Solicitud recibida correctamente",
//         nombre: nombre,
//         apellido: apellido,
//         correo: correo
//     });
// });

// construc1.post("/Registro", (req, res) => {
//     let { nombre, apellido, correo } = req.body;
//     res.json({ "Nombre":nombre,"apellido": apellido, "Correo":correo })
// })





construc1.listen(PORT,()=>{
    console.log('Servidor ejecutandose correctamente'+" "+ PORT)
});