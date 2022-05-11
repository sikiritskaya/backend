import passport from 'passport';
import passportJWT from 'passport-jwt';
//import AuthUser from '../User/Auth/AuthUser';
import {ExtractJwt} from 'passport-jwt';

const JWTStrategy = passportJWT.Strategy;

/* const cookieExtractor = req => {
    let jwt = null; 

    if (req && req.cookies) {
        jwt = req.cookies['token'];
    }

    return jwt;
}; */


passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    //jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.SECRET_KEY,
    passReqToCallback: true
}, (req, jwtPayload,done)=>{
    console.log('122');
    return done(null, false, { errors: { 'access': 'is invalid' } });
   /*  AuthUser.findOne({ username: jwtPayload._doc.username })

        .then((user) => {
            if (!user) {
                return done(null, false, { errors: { 'access': 'is invalid' } });
            }
            return done(null, user);
        }).catch(done); */
}));
