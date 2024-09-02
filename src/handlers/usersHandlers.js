const { createUserDb,getUserById,getAllUsers,getUserByName } = require("../controllers/usersControllers");

const getUserHandler = async(req, res) => {
    const { name } = req.query;
    // handrler se va encarar de procesar la peticion
    // unficar datos
    // retornar una respuesta
    // invoca al controller ---> EL HANDLER NUNCA INTERACTUA CON FUENTES EXTERNAS API O DB
    // el controler es otra funcion que se encarga de procesar la peticion
   try {
    if (name) {
        const userByName = await getUserByName(name);
        res.status(200).json(userByName); 
    } else {
        const response = await getAllUsers();
        res.status(200).json(response);
    }
   } catch (error) {
    res.status(400).json({error: error.message})
   }
}

// /:id  => params
const getDetailUserHandler = async(req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
     
    try {
        const response = await getUserById(id,source)        
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

// POST => body
const postCreateUserHandler = async(req, res) => {
    const {name,email,phone} = req.body

    try {
        const response = await createUserDb(name,email,phone)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

/* formas de enviar informacion a mi backend
    // /:id  => params
    // POST => body
    // GET => query ?name=name&age=age
 
*/


module.exports = {
    getUserHandler,
    getDetailUserHandler,
    postCreateUserHandler
}