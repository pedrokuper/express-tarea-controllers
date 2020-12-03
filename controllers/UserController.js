class UserController {
  getUser(req, res) {
    res.send(`El ususario ${req.params.name} tiene ${req.query.age} años`);
  }
}

module.exports = UserController;
