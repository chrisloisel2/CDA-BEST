import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
	name: { type: String, required: true },
	age: { type: Number, required: true },
});

const connectDB = async () => {
	try {
	  await mongoose.connect('mongodb://localhost:27017/nomDeVotreBaseDeDonnées');
	  console.log('Connexion à MongoDB réussie');
	} catch (erreur) {
	  console.error('Erreur de connexion à MongoDB', erreur);
	  process.exit(1); // Arrêter l'application en cas d'échec de connexion
	}
  };


export const UserModel = mongoose.model('User', userSchema);

