import passport from 'passport';
import passportJWT from 'passport-jwt';
import AuthUser from '../Auth/AuthUser.js';

const JWTStrategy = passportJWT.Strategy;

const cookieExtractor = req => {
    let jwt = null; 

    if (req && req.cookies) {
        jwt = req.cookies['token'];
    }

    return jwt;
};

passport.use(new JWTStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.SECRET_KEY,
    passReqToCallback: true
}, (req, jwtPayload,done)=>{
    AuthUser.find({ user: jwtPayload.user})
        .then((user) => {
            if (!user) {
                return done(null, false, { errors: { 'user': 'Error during getting user' } });
            }
            return done(null, user);
        }).catch(done);
}));
