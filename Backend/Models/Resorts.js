const mongoose = require('mongoose')
// hmm not working hmmmmm

const commentSchema = new mongoose.Schema({

  text: { type: String, required: true }
  // user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
  
}, {
  timestamps: true
})

const resortsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  top_elevation: { type: Number, required: true },
  bottom_elevation: { type: Number, required: true },
  lon: { type: Number, required: true },
  lat: { type: Number, required: true },
  image: { type: String, required: true },
  comments: [ commentSchema ]
})


module.exports = mongoose.model('Resorts', resortsSchema)