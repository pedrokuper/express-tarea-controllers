const express = require("express");
const router = express.Router();

//& Controllers

const UserController = require("../controllers/UserController");
const NumberController = require("../controllers/NumberController");
const PalindromeController = require("../controllers/PalindromeController");

//~Instances

const UserInstance = new UserController();
const NumberInstance = new NumberController();
const PalindromeInstance = new PalindromeController();

router.get("/", (req, res) => {
  res.send("Este es el punto de entrada a mi página");
});

/*
  Ejercicio 3
- Utilizando Express crear una ruta que reciba como parametro nuestro nombre y lo muestre en pantalla.
- Pasarle por query nuestra edad y mostrarla también
 */

router.get("/users/:user", (req, res) => {
  UserInstance.getUser(req, res);
});

/*
  Ejercicio 4
  Utilizando Express crear una ruta que reciba como parámetro un número y nos muestre en pantalla el mismo número multiplicado por 2
 */

router.get(`/numbers/:number`, (req, res) => {
  NumberInstance.getNumber(req, res);
});

/*
Ejercicio 5
- Utilizando Express crear una ruta que reciba como parámetro una palabra, y nos devuelva en pantalla si la misma es o no un palíndromo en el siguiente formato:

'La frase ${frase} es un palíndromo ya que al revés se lee: {frase al revés}.'

o en su defecto

'La frase ${frase} NO es un palíndromo ya que al revés se lee: {frase al revés}.'
*/

router.get("/words/:word", (req, res) => {
  PalindromeInstance.getPalindrome(req, res);
});

module.exports = router;
