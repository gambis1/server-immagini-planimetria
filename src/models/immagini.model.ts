import mongoose, { Document, Model, Schema } from "mongoose";

export interface IImmagini extends Document {
  nome: string;
  link_immagine: string;
}

// Definisci lo schema
const ImmaginiSchema: Schema = new Schema({
  nome: { type: String, required: true },
  link_immagine: { type: String, required: true }
});

const Immagini: Model<IImmagini> = mongoose.model<IImmagini>("Immagini", ImmaginiSchema);

export { Immagini, ImmaginiSchema };
export default Immagini;
