const mongoose = require('mongoose');
const express = require("express");
const Offer = require("../models/offer");
const User = require("../models/user");
const router = express.Router();
const uploadCloud = require('../configs/cloudinary-setup');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

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

router.get("/crew", async (req, res, next) => {
    let activeUsers = await User.find({ lookingForSailAsCrew: true })
      try {
        res.json(activeUsers);
      }
      catch(err) {
        res.json(err);
  }})

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

  //RUTA EDITAR UNA OFERTA  

  // PUT route => to update a specific project
router.put('/editoffer/:id', uploadCloud.single("photo"), (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
  }
  Offer.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.json({message: `Offer with ${req.params.id} is updated successfully.`})
  })
  .catch(err => {
      res.json(err)
  })
});

  module.exports = router;
