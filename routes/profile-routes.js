const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get('/profile', async function (req, res, next) {
    let theUser = await User.findById(res.locals.currentUserInfo._id)
      res.render('/profile', {theUser});
    });

router.put('/profile/:id/edit', withAuth(), (req, res, next) => {
    User.findByIdAndUpdate({_id: req.params.id}, 
      {username, age, gender, disponibility, email, languajes, country, city, experience, lookingForSail, image}, {new: true})
      .then((updateUser) => {
          res.locals.currentUserInfo = updateUser;
          res.redirect('/profile')
      })
      .catch((error) => {
          console.log(error)
      })
});







module.exports = router;