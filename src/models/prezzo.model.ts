import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPrezzo extends Document {
  importo: number;
  iva: boolean;
  p_iva: number;
}

const PrezzoSchema: Schema = new Schema({
  importo: { type: Number, required: true },
  iva: { type: Boolean, required: true },
  p_iva: { type: Number, required: true },
});

const Prezzo: Model<IPrezzo> = mongoose.model<IPrezzo>("Prezzo", PrezzoSchema);

export { Prezzo, PrezzoSchema };
export default Prezzo;
