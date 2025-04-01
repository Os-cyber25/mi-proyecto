#  INSTRUCIONES 
<P>
Algunos de los Temas que vimos
</P>
- Creamos una API res
- Instalamos node.js
- Descargue Thunder Client, en Visual Studio Code
- Creamos una carpeta llamada Epress Server
- Se inicia el programa con (npm init -y)
- Se realiza pruebas si todo esta funcionando bien "start": "node ./index.js"
- Se instala el programa con (npm install express --save), y se revisa las dependencias
- Se crea index.js, se inporta el modulo y se asigna la constante
- Se crea el Sevidor y hacerle escuchar peticiones, 
   server.listen(3000, () => {
    console.log("server is listenig");
- Se realizan pruebas si todo Funciona correctamente
- Luego se crean las rutas:
_ Se crea el Usuario, router.get("/users", (req, res) => {
    return res.status(200).json(users);
implementando los siguentes endpoints:

GET: Obtener Tareas
POST: Crear Nueva Tarea
PUT: Actualiza tareas
DELETE

<P>
Espero que sea de utilidad
</P>
###Endproyecto de prueba con Git
