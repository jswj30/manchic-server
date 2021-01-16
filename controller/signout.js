module.exports = {
  get: (req, res) => {
    if (req.session.userId) {
      req.session.destroy((err) => {
        if (err) {
          console.log(err);
        } else {
          res.status(205).send("Logged out successfully");
        }
      });
    } else {
      res.status(205).send("Logged out successfully");
    }
  },
};
