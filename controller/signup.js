const { user } = require("../models");

module.exports = {
  post: async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(422).send("모든 정보를 입력해주세요.");
    }

    const userData = await user.findOrCreate({
      where: { email },
      defaults: { password: password },
    });

    if (userData) {
      const [user, created] = userData;
      if (!created) {
        res.status(409).send("이미 존재하는 유저입니다.");
      } else {
        res.status(201).json(user);
      }
    } else {
      res.status(500).send("error");
    }
  },
};
