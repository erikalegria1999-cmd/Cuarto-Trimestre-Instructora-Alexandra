const express = require ("express")
const app = express()
const PORT =5000
const cors = require ("cors")
app.use(cors({origin: "http://localhost:5173"}))
app.use(express.json())

app.get("/informacion",(req,res)=>{
    res.send(` <h1>informacion del servidor</h1>
        <p>purto: ${PORT}</p>
        <p> nombre: servidor de prueba</p>`)
})
app.post("/registro",(req,res)=>{
    let {nombre,apellido}=req.body
    if (nombre && apellido) {
        res.send(`<h1> Datos correctamente ingresados</h1>
        <h2>Bienvenido ${nombre} ${apellido} </h2>`)
    } else {
        res.send(`<p><storng>Error: llene todos los espacios</storng></p>`)
    }
})


app.listen(PORT,()=>{
    console.log("el servidor esta ejecutandose correctamente" + " " + PORT)
})