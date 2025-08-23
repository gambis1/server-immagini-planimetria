import mongoose, { Document, Model, Schema } from "mongoose";

export interface IDati extends Document {
  superficie_commerciale: string;
  superficie_utile_abitabile: string;
  casa_a_due_piani: boolean;
  tetto_a_capriate: boolean;
}

// Definisci lo schema
const DatiSchema: Schema = new Schema({
  superficie_commerciale: { type: String, required: true },
  superficie_utile_abitabile: { type: String, required: true },
  casa_a_due_piani: { type: Boolean, required: true },
  tetto_a_capriate: { type: Boolean, required: true }
});

const Dati: Model<IDati> = mongoose.model<IDati>("Dati", DatiSchema);

export { Dati, DatiSchema };
export default Dati;
