
const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const { Game } = require("../models");


const options = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: "rahasia sekali",
};

passport.use(
  new JwtStrategy(options, async (payload, done) => {
    console.log('payload', payload);
    Game.findByPk(payload.id)
      .then((user) => done(null, user))
      .catch((err) => done(err, false));
  })
);

module.exports = passport;