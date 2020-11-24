const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const offerSchema = new Schema({
    crewNumber: String,
    boardingLocation: String,
    destiny: String,
    costs: {type: String, enum: ["unpaid", "paid", "contributing"]}, 
    start: String,
    estimatedTime: String,
    description: String,
    nationality: String,
    ageCrew: String,
    journey: {type: String, enum: ["tourism", "cruising", "regatta", "charter"]},
    experience: {type: String, enum: ["required", "no required"]},
    seaMiles: {type: String, enum: ["no required", "more than 100 miles", "more than 1000 miles", "more than 10000 miles"]},
    offerImage: {type: Schema.Types.ObjectId, ref: 'boat', default: "https://res.cloudinary.com/dh2lo8p1f/image/upload/v1605811781/fotos/foto_barco_q0adis.jpg"},
    offerCreator: {type: Schema.Types.ObjectId, ref: 'user'},
    contactEmail:String,
}, 
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;