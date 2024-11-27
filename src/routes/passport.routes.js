import { Router } from "express";
import passport from "passport";
import "../strategies/passport-local.js";

export const passportRouter = Router();

passportRouter.post(
  "/auth/local",
  passport.authenticate("local", {
    successRedirect: "/users",
    failureRedirect: "/error",
  })
);

// passportRouter.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/" }),
//   function (req, res) {
//     res.redirect("/api/v1/profile");
//   }
// );
