import passport from 'passport';
import passportJWT from 'passport-jwt';
import AuthUser from '../User/Auth/AuthUser';
import {ExtractJwt} from 'passport-jwt';

const JWTStrategy = passportJWT.Strategy;

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.MY_SECRET_KEY,
}, (jwtPayload,done)=>{
    AuthUser.findOne({ username: jwtPayload._doc.username })
        .then((user) => {
            if (!user) {
                return done(null, false, { errors: { 'access': 'is invalid' } });
            }
            return done(null, user);
        }).catch(done);
}));
