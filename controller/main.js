module.exports = {
  get: (req, res) => {
    let sess = req.session;
    if (sess.users) {
      let result = {
        session: sess.users,
      };
      console.log("main: ", result);
      res.status(200).json(result);
    } else {
      console.log(sess);
      res.status(401).send("세션이 없습니다.");
    }
  },
};
