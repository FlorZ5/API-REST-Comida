const express=require('express');//importar express
const app = express();//uso de express
const port=3500;//definir el puerto

app.get('/', (req, res) =>{//mandar peticion a raiz para provar que la app está corriendo correctamente
    res.json({message:"Aplicación funcionando correctamente"});//encio de mensaje de confirmación
});


app.listen(port, () => {//el app listen ayuda a escuchar el puerto
    console.log('listening on port '+port+' wiiiiiiiiii si jaleishon');//se envia un mensaje a la consola para saber que se está usando el puerto
});