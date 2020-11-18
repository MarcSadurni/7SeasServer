const express = require("express");
const User = require("../models/user");
const router = express.Router();
const Offer = require("../models/offer");
const Boat = require("../models/boat");

// RUTA PARA OBTENER LAS OFERTAS QUE HAYA CREADO EL USUARIO

router.get("/", async (req, res, next) => {
  console.log("hola");
  // preguntar com relacionem la oferta amb l'usuari que l'ha creat
  let myOffers = await Offer.findById(req.body._id);
  // let myOffers = await Offer.find(req.body.offerCreator)
  // User.findById(req.body._id) = Offer.find(req.body.offerCreator);
  try {
    res.json(myOffers);
  } catch (error) {
    console.log(error);
  }
});

// RUTA PARA PODER EDITAR LA INFORMACION DEL USUARIO

router.put("/:id/editUser", (req, res, next) => {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      username,
      age,
      gender,
      disponibility,
      email,
      languages,
      country,
      city,
      experience,
      lookingForSail,
      image,
    },
    { new: true }
  )
    .then((updateUser) => {
      res.locals.currentUserInfo = updateUser;
      res.redirect("/profile");
    })
    .catch((error) => {
      console.log(error);
    });
});

// RUTA PARA PODER EDITAR LA INFORMACION DEL USUARIO

router.put("/:id/editBoat", (req, res, next) => {
  //preguntar si es fa servir el id del parametre owner o id del model boat
  Boat.findByIdAndUpdate(
    { _id: req.params.id },
    {
      boatName,
      year,
      typeBoat,
      country,
      currentLocation,
      crewNumber,
      rooms,
      owner,
      length,
      image,
    },
    { new: true }
  )
    .then((updateBoat) => {
      res.locals.currentUserInfo = updateBoat;
      res.redirect("/profile");
    })
    .catch((error) => {
      console.log(error);
    });
});

// RUTA PARA PODER CREAR UNA OFERTA

// router.post("/profile/createoffer", (req, res, next) => {
//     Offer.create({
//     crewNumber = req.body.crewNumber,
//     boardingLocation = req.body.boardingLocation,
//     destiny= req.body.destiny,
//     costs=req.body.costs,
//     start=req.body.start,
//     estimatedTime=req.body.estimatedTime,
//     description=req.body.description,
//     nationality=req.body.nationality,
//     ageCrew=req.body.ageCrew,
//     journey=req.body.journey,
//     experience=req.body.experience,
//     seaMiles=req.body.seaMiles,
//     offerImage=req.body.offerImage,
//     offerCreator=req.body.offerCreator,
//     })
//       .then(response => {
//         res.json(response);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

module.exports = router;
