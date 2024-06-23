import { Request, Response } from "express";
import Music from "../models/Music";
import Artist from "../models/Artist";

class MusicController {
  // Create a music record
  async createMusic(req: Request, res: Response) {
    try {
      const { title, album_name, genre, artistId } = req.body;
      const music = await Music.create({
        title,
        album_name,
        genre,
        artist: artistId,
      });

      // Add music reference to the artist
      await Artist.findByIdAndUpdate(artistId, { $push: { music: music._id } });

      return res.status(201).json({ music });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error creating music", error: err });
    }
  }

  async getMusics(req: Request, res: Response) {
    try {
      const music = await Music.find();
      if (!music) {
        return res.status(404).json({ message: "Music not found" });
      }
      return res.status(200).json({ music });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error fetching music", error: err });
    }
  }

  // Update a music record by ID
  async updateMusic(req: Request, res: Response) {
    try {
      const music = await Music.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!music) {
        return res.status(404).json({ message: "Music not found" });
      }
      return res.status(200).json({ music });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error updating music", error: err });
    }
  }

  // Delete a music record by ID
  async deleteMusic(req: Request, res: Response) {
    try {
      const music = await Music.findByIdAndDelete(req.params.id);
      if (!music) {
        return res.status(404).json({ message: "Music not found" });
      }

      // Remove music reference from the artist
      await Artist.findByIdAndUpdate(music.artist, {
        $pull: { music: music._id },
      });

      return res.status(200).json({ message: "Music deleted" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error deleting music", error: err });
    }
  }
}

export default MusicController;
