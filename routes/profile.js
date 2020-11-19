const express = require("express");
const User = require("../models/user");
const router = express.Router();
const Offer = require("../models/offer");
const Boat = require("../models/boat");
const mongoose = require("mongoose");

// RUTA PARA OBTENER LAS OFERTAS QUE HAYA CREADO EL USUARIO

router.get("/", async (req, res, next) => {
 
  // preguntar com relacionem la oferta amb l'usuari que l'ha creat
  let myOffers = await Offer.find({ offerCreator: req.body._id });
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
      username: req.body.username,
      age: req.body.age,
      gender: req.body.gender,
      disponibility: req.body.disponibility,
      email: req.body.email,
      languages: req.body.languages,
      country: req.body.country,
      city: req.body.city,
      experience: req.body.experience,
      lookingForSailAsCrew : req.body.lookingForSailAsCrew,
      image: req.body.image,
    },
    { new: true }
  )
    .then((updateUser) => {
      res.locals.currentUserInfo = updateUser;
      res.json(updateUser);
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
      boatName: req.body.boatName,
      year: req.body.year,
      typeBoat: req.body.typeBoat,
      country: req.body.country,
      currentLocation: req.body.currentLocation,
      crewNumber: req.body.crewNumber,
      rooms: req.body.rooms,
      owner: req.body.owner,
      length: req.body.length,
      image: req.body.image
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

//CREAR EL MODELO DEL BARCO


router.post("/createBoat", (req, res, next) => {
  Offer.create({
    boatName: req.body.boatName,
    year: req.body.year,
    typeBoat: req.body.typeBoat,
    country: req.body.country,
    currentLocation: req.body.currentLocation,
    crewNumber: req.body.crewNumber,
    rooms: req.body.rooms,
    owner: req.body.owner,
    length: req.body.length,
    image: req.body.image
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

// RUTA PARA PODER CREAR UNA OFERTA

router.post("/createoffer", (req, res, next) => {
    Offer.create({
    crewNumber : req.body.crewNumber,
    boardingLocation : req.body.boardingLocation,
    destiny :req.body.destiny,
    costs:req.body.costs,
    start:req.body.start,
    estimatedTime:req.body.estimatedTime,
    description:req.body.description,
    nationality:req.body.nationality,
    ageCrew:req.body.ageCrew,
    journey:req.body.journey,
    experience:req.body.experience,
    seaMiles:req.body.seaMiles,
    offerImage:req.body.offerImage,
    offerCreator:req.body.offerCreator,
    })
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.json(err);
      });
  });

// RUTA PARA BORRAR UNA OFERTA

router.delete('/delete/:id', (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
  }
  Offer.findByIdAndRemove(req.params.id)
  .then(() => {
      res.json({message: `Offer with ${req.params.id} is removed successfully.`})
  })
  .catch(err => {
      res.json(err)
  })
});

module.exports = router;