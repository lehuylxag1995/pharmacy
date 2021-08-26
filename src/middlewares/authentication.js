const User = require('../models/UserModel')

function configPassport(passport, LocalStrategy) {
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
  passport.use(new LocalStrategy(User.authenticate()))
}

module.exports = configPassport