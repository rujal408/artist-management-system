import { Request, Response } from "express";
import Artist from "../models/Artist";

class ArtistController {
  protected async createArtist(req: Request, res: Response) {
    try {
      const { name, address, no_of_albums } = req.body;
      const artist = await Artist.create({ name, address, no_of_albums });
      return res.status(201).json({ artist });
    } catch (err) {
      return res.status(401).json({ message: "" });
    }
  }
}

export default ArtistController;
