const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const boatSchema = new Schema({
    boatName: String,
    year: String,
    typeBoat: {type: String, enum: ["power", "sail"]}, 
    country: String,
    currentLocation: String,
    crewNumber: Number,
    rooms: Number,
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    length: String,
    image: String
}, 
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
});

const Boat = mongoose.model('Boat', boatSchema);

module.exports = Boat;

