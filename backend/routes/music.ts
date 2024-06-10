import { Router} from 'express';
import MusicController from '../controllers/MusicController';
import authMiddleWare from '../middleware/auth';

class MusicRoutes extends MusicController{
    public router: Router;
    public path ='/music'

    constructor() {
        super()
        this.router = Router();
        this.initializeRoutes();
      }

      private initializeRoutes() {
        this.router.use(authMiddleWare)
        this.router.post(`${this.path}/create`, this.createMusic);
      }
}

export default MusicRoutes;