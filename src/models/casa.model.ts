import mongoose, { Schema, Document, Model } from "mongoose";
import { IImmagini, ImmaginiSchema } from "./immagini.model.ts";
import { IDati, DatiSchema } from "./dati.model.ts";
import { IPrezzo, PrezzoSchema } from "./prezzo.model.ts";

export interface ICasa {
  casa: string;
  planimetria?: IImmagini[];
  immagini_esterno?: IImmagini[];
  dati?: IDati;
  prezzo?: IPrezzo;
}

const CasaSchema: Schema = new Schema({
  casa: { type: String, required: true },
  planimetria: [ImmaginiSchema],
  immagini_esterno: [ImmaginiSchema],
  dati: { type: DatiSchema },
  prezzo: { type: PrezzoSchema }
});

const Casa: Model<ICasa> = mongoose.model<ICasa>("Casa", CasaSchema);

export default Casa;
