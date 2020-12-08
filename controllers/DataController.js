const axios = require("axios");

class DataController {
  //   Ejercicio 1:
  // endpoint: https://api.github.com/users/doomling
  // Queremos crear una API con una ruta dinámica [GET] /user/:id que busque la información del usuario ingresado en la API de Github y nos devuelva todo

  async getUserId(req, res) {
    const userId = req.params.userid;
    console.log("userid", userId);
    const github = await axios.get(`https://api.github.com/users/${userId}`);
    res.json(github.data);
  }
}

module.exports = DataController;
