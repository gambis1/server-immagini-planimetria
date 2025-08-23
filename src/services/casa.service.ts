import { Request, Response } from "express";
import Casa, { ICasa } from "../models/casa.model.js";

export const getCasa = async (req: Request, res: Response): Promise<void> => {
  try {
    const item = await Casa.findOne({ casa: req.params.casa }).exec();
    res.send(item);
  } catch (err: any) {
    res.status(500).send({ message: err.message });
  }
};

export const createCasa = async (req: Request, res: Response): Promise<void> => {
  try {
    const item = new Casa<ICasa>({
      casa: "Prova"
    });

    const dati = await item.save();
    res.send(dati);
  } catch (err: any) {
    res.status(500).send({ message: err.message });
  }
};
