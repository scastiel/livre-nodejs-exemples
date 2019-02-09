const mongoose = require('mongoose')

// 1- Déclaration du modèle
const utilisateurSchema = mongoose.Schema({
  nom: String,
  nb: Number,
  adresse: {
    voie: String,
    ville: String
  }
})
utilisateurSchema.methods.hello = () => {
  console.log("Bonjour, je m'appelle " + this.nom + ' !')
}
const Utilisateur = mongoose.model('utilisateurs', utilisateurSchema)

// 2- Opérations sur les données
const db = mongoose.connection
db.once('open', () => {
  const pierre = new Utilisateur({
    nom: 'Pierre',
    adresse: {
      voie: 'Avenue des Rues',
      ville: 'Rennes'
    }
  })
  pierre.save((err, utilisateur) => {
    utilisateur.hello()
    mongoose.disconnect()
  })
})

mongoose.connect('mongodb://localhost/mabase2')
