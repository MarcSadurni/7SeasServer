// PARA VER TODAS LAS OFERTAS EN /OFFER

const Offer = require("../models/offer");
const User = require("../models/user");

// RUTA PARA VISUALIZAR TODAS LAS OFERTAS DE TRIPULANTES

router.get("/offer/boats", (req, res, next) => {
    Offer.find()
      .populate("offer")
      .then(boatOffers => {
        res.json(boatOffers);
      })
      .catch(err => {
        res.json(err);
      });
  });

//   RUTA PARA VISUALIZAR TODAS LAS OFERTAS DE BARCOS

router.get("/offer/crew", (req, res, next) => {
    User.find()
      .populate("user")
      .then(userOffers => {
        res.json(userOffers);
      })
      .catch(err => {
        res.json(err);
      });
  });


//   PARA PODER VISUALIZAR UNA OFERTA DE BARCOS EN CONCRETO

  router.get('/offers/boat/:id', (req, res, next)=>{

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

  router.get('/offers/crew/:id', (req, res, next)=>{

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