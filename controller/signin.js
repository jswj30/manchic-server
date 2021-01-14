const { user } = require("../models");

module.exports = {
  post: async (req, res) => {
    const { email, password } = req.body;
    let findUser = await user.findOne({
      where: { email, password },
    });

    try {
      if (findUser) {
        req.session.userId = findUser.id;
        res.status(200).json({
          id: findUser.id,
          email: findUser.email,
        });
        console.log("signin: ", req.session);
      } else {
        res.status(404).send("유저를 찾을 수 없습니다.");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
