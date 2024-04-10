const passport = require("passport");

const JWTStrategy = require("passport-jwt").Strategy;

const ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require("../models/userSchema");

const Creator = require("../models/creatorSchema");

let opts = {
  jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "cre8share",
};

passport.use('user-jwt',new JWTStrategy(opts, async function (jwtpayload, done) {
    try{
        const user = await User.findById(jwtpayload._id);
        if(user){
           return done(null,user);
        }
        else{
            return done(null,false);
        }
    }
    catch(err){
        return done(err,false);
    }
}));

passport.use('creator-jwt',new JWTStrategy(opts, async function (jwtpayload, done) {
    try{
        const user = await Creator.findById(jwtpayload._id);
        if(user){
           return done(null,user);
        }
        else{
            return done(null,false);
        }
    }
    catch(err){
        return done(err,false);
    }
}));

module.exports = passport;