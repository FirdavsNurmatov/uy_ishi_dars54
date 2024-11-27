import passport from "passport";
import LocalStrategy from "passport-local";
import { logger } from "../utils/index.js";
import { getUserByEmailService } from "../services/index.js";

export default passport.use(
  new LocalStrategy(async function (email, password, done) {
    try {
      console.log(email, password);
      const currentUser = await getUserByEmailService(email);

      if (
        currentUser?.status == 404 ||
        currentUser?.msg.password !== password
      ) {
        console.log(currentUser);
        return done(null, false, {
          message: "Incorrect username or password.",
        });
      }

      done(null, currentUser[0]);
    } catch (error) {
      logger.error(er);
      done(error);
    }
  })
);

// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(async function (id, done) {
//   try {
//     const currentUser = await Service.findById(id);
//     done(null, currentUser);
//   } catch (error) {
//     done(error);
//   }
// });
