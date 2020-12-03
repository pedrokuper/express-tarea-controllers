class NumberController {
  getNumber(req, res) {
    const number = req.params.number;
    const result = +number * 2;
    const string = result.toString();
    res.send(string);
  }
}

module.exports = NumberController;
