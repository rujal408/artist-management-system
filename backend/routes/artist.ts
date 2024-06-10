import { Router} from 'express';
import ArtistController from '../controllers/ArtistController';
import authMiddleWare from '../middleware/auth';

class ArtistRoutes extends ArtistController{
    public router: Router;
    public path ='/artist'

    constructor() {
        super()
        this.router = Router();
        this.initializeRoutes();
      }

      private initializeRoutes() {
        this.router.use(authMiddleWare)
        this.router.post(`${this.path}/create`, this.createArtist);
      }
}

export default ArtistRoutes;