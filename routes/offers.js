const express = require("express");
const Offer = require("../models/offer");
const User = require("../models/user");
const router = express.Router();


// RUTA PARA VISUALIZAR TODAS LAS OFERTAS DE TRIPULANTES

router.get("/boats", (req, res, next) => {
    Offer.find()
      .populate("user")
      .then(boatOffers => {
        res.json(boatOffers);
      })
      .catch(err => {
        res.json(err);
      });
  });

//   RUTA PARA VISUALIZAR TODAS LAS OFERTAS DE USUARIOS

router.get("/crew", (req, res, next) => {
    User.find()
      .then(userOffers => {
        
        res.json(userOffers);
      })
      .catch(err => {
        res.json(err);
      });
  });


//   PARA PODER VISUALIZAR UNA OFERTA DE BARCOS EN CONCRETO

  router.get('/boats/:id', (req, res, next)=>{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }

    Offer.findById(req.params.id).populate('boat')
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.json(err);
      })
  })

//   PARA PODER VISUALIZAR UNA OFERTA DE CREW EN CONCRETO

  router.get('/crew/:id', (req, res, next)=>{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }

    Offer.findById(req.params.id).populate('user')
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.json(err);
      })
  })


  module.exports = router;