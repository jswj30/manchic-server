const { user } = require("../models");

module.exports = {
  post: (req, res) => {
    const { email, password } = req.body;
    req.session.regenerate(() => {
      user
        .findOne({
          where: { email, password },
        })
        .then((result) => {
          if (!result) {
            res.status(404).send("유저를 찾을 수 없습니다.");
          } else {
            req.session.users = result.id;
            res.status(200).json({
              id: result.id,
              session: req.session.users,
            });
            console.log("signin: ", req.session);
          }
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    });
  },
};
