import { Router } from "express";
import ArtistController from "../controllers/ArtistController";
import authMiddleWare from "../middleware/auth";

class ArtistRoutes extends ArtistController {
  public router: Router;
  public path = "/artist";

  constructor() {
    super();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.use(authMiddleWare);
    this.router.post(`${this.path}/create`, this.createArtist);
    this.router.get(`${this.path}/list`, this.getArtists);
    this.router.delete(`${this.path}/:id`, this.deleteArtist);
  }
}

export default ArtistRoutes;
