const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Game } = require("../models");

async function authenticate(username, password, done) {
  try {
    const user = await Game.authenticate({ username, password });
    console.log(user);
    return done(null, user);
  } catch (err) {
    return done(null, false, { message: err.message });
  }
}

passport.use(
  new LocalStrategy(
    { usernameField: "username", passwordField: "password" },
    authenticate
  )
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) =>
  done(null, await Game.findByPk(id))
);

module.exports = passport;