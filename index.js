const express = require("express");

const server = express();

const router = express.Router();

const users = [
    {id: 1, name: "Benjamin", age: 22 },
    {id: 2, name: "Benjamin", age: 22 }];

router.get("/users", (req, res) => {
    return res.status(200).json(users);
});

//Get /user/id:--- obtener un usuario mediante un parametro dinamico

router.get("/users/:id", (req, res) => {
    const params = req.params;
    const id = Number(params.id);
    const finduser = users.find((user) => {
    return user.id ===id;
    });
    // puede ser un usuario o undefined
    if(finduser ===undefined) res.status(404).json(finduser);
    return res.status(200).json({finduser});
});

// POST
router.post("/users", (req, res) => {
const body = req.body;
const { name, age } = body;
console.log(name, age);
const newuser = {
    id: users.length +1,
    age,
    name,
};
users.push(newuser);
return res.status(201).json(newuser);
});
// PUT nos permite actualizar
router.put("/users/:id", (req, res) => {
    const body = req.body;
    const params = req.params;
    const id = Number(params.id);
    const userIndex = users.findIndex((user) => {
    return user.id === id;
    });
    // retorna indice del iten en el arreglo
    console.log(userIndex);
    if (userIndex === -1) { 
        return res.status(404).json({ error: "El usuario no Existe"});
    }
    const updateduser = {
    ...body,
    id,
    };
    users[userIndex] = updateduser;
    return res.status(200).json(updateduser);
});
// DELETE 
router.delete("/users/:id", (req,res) =>{
    const params = req.params;
    const id = Number(params.id);
    const userIndex = users.findIndex((user) => {
        return user.id === id;

    });
    if (userIndex === -1) {
        return res.status(404).json({ error: "El Usuario no Existe" });
    }
    users.splice(userIndex, 1);
    return res.status(204).json();
});

server.use(express.json());
server.use(router);

server.listen(3000, () => {
    console.log("server is listenig");
});