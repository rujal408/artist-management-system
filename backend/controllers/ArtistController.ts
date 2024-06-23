import { Request, Response } from "express";
import Artist from "../models/Artist";
import Music from "../models/Music";

class ArtistController {
  // Create an artist
  async createArtist(req: Request, res: Response) {
    try {
      const { name, address, no_of_albums } = req.body;
      const artist = await Artist.create({ name, address, no_of_albums });
      return res.status(201).json({ artist });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error creating artist", error: err });
    }
  }

  async getArtists(_: Request, res: Response) {
    try {
      const artists = await Artist.find();
      return res.status(200).json({ artists });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error fetching artists", error: err });
    }
  }

  // Update an artist by ID
  async updateArtist(req: Request, res: Response) {
    try {
      const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!artist) {
        return res.status(404).json({ message: "Artist not found" });
      }
      return res.status(200).json({ artist });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error updating artist", error: err });
    }
  }

  // Delete an artist by ID
  async deleteArtist(req: Request, res: Response) {
    try {
      const artist = await Artist.findByIdAndDelete(req.params.id);
      if (!artist) {
        return res.status(404).json({ message: "Artist not found" });
      }
      return res.status(200).json({ message: "Artist deleted" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error deleting artist", error: err });
    }
  }
}

export default ArtistController;
