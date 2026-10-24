// primero importo el express para utilizar sus funciones en este caso vamos a usar el require
const express = require('express');
//esta sera la ruta de  peticiones y el comportamiento del servidor.
const app = express();
//cree el servidor en mayusculas y le vamos a asignar 5000 como referencia al servidor
const PORT = 5000
// se usa para interpretar el texto 
app.use(express.json())

app.post("/usuario",(req,res)=>{
    console.log(req.body)
    res.send("usuario Creado Exitosamente")
})

// app.get obtiene datos
// /bienvenida es la ruta o endpoint de la Url
// req contiene la informacion enviada por el usuario
// res es la respuesta al cliente 
app.get('/Bienvenida',(req,res)=>{
    // le indica al servidor que envie la respuesta
    res.json({"Mensaje": "Bienvenido"})
});
app.get('/Informacion',(req,res)=>{
    res.json({"informacion":"Servidor de prueba para la actividad Uno"})
})

// app.post se utiliza cuando necesita enviar informacion al servidor
//req.body estos son los datos suministrados por el cliente
//res.json cuando los datos se administran de como respuesta los datos recibidos
app.post('/Solicitudes',  (req,res)=>{
    let {nombre,apellido,correo}=req.body
    res.json({"nombre": nombre,
        "apellido": apellido,
        "correo": correo,
//un mensaje de que si se ingresaron datos
        "mensaje": "ingreso exitoso"
    })
})
// app.post escucha la solicitud HTTP
//req,res recibe dos objetos que se ejecutan cada vez que se ejecuta
app.post('/Validacion',  (req,res)=>{
// req.body guarda  en las variables los datos ingresados
    let {nombre,apellido,correo}=req.body
// realizo una validacion condicional de los tres campos existentes con el &&    
    if(nombre && apellido && correo){
        res.json({"Nombre": nombre,
        "Apellido": apellido,
        "Correo": correo,
//un mensaje de que si se ingresaron datos
        "Mensaje": "ingreso exitoso"
    })
// si alguno de los tres campos esta vacio envia un mensaje 
    } else {
        res.json({"Mensaje": "Error: Datos no ingresados"})
    }
})
app.use((req,res,next)=>{
    console.log("peticion global")
    next()
})
// next se usa para que se sepa que puede avanzar al siguiente paso
app.get('/middleware',(req,res,next)=>{
    console.log("peticion")
//pasa al siguiente middleware
    next()
}, (req,res)=>{
// esta es la funcion final
    res.send("hola desde la ruta final")
//send envia la respuesta y cierra la conexion una vez que ejecute la linea de codigo
})
//cree la funcion para que funcionara 
function verificar(req,res,next){
    console.log("Acceso verifado")
    next()
}
//el usuario quiere visitar el perfil pero se ejecuta primero la funcion verificar 
//despues utiliza el nex que permite que continue hacia el perfil
// despues si se envia la respuesta de bienvenida al perfil privado
app.get("/perfil",verificar,(req,res)=>{
    res.send("Bienvenido al perfil privado")
})

app.get("/perfil-dos",(req,res,next)=>{
// indica que ocurrio un error    
    next(new Error("Error de prueba"))
})
// 1. siempre se coloca al final de todas las rutas
// 2. en este caso recibe 4 parametros y reconoce especialmente errores 
//3. err contiene  el error que ocurre en la consulta o cuando la base de datos falla, aqui es donde recibes informacion de que salio mal
app.use((err,req,res,next)=>{
//imprime el error en la terminal con detalle
    console.log(err.message);    
    res.status(500).send("ocurrio un error")
})


//este es el puerto con su mensaje del servidor
app.listen(PORT,()=>{
    console.log('Servidor ejecutandose correctamente'+ PORT)
});
