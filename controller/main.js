module.exports = {
  get: (req, res) => {
    if (req.session.userId) {
      console.log("main: ", req.session.userId);
      res.status(200).json(req.session.userId);
    } else {
      console.log(req.session);
      res.status(500).send("세션이 없습니다.");
    }
  },
};
