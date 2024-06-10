import { Request, Response } from "express";
import Music from "../models/Music";

class MusicController {
  protected async createMusic(req: Request, res: Response) {
    try {
      const { title, albumn_name, genere } = req.body;
      const music = await Music.create({ title, albumn_name, genere });
      return res.status(201).json({ music });
    } catch (err) {
      return res.status(401).json({ message: "" });
    }
  }
}

export default MusicController;
