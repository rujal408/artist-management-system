import express from "express";
import cors from "cors";
import UserRoutes from "./user";
import MusicRoutes from "./music";
import ArtistRoutes from "./artist";

class Routes {
  public app: express.Application;
  public userRoutes: UserRoutes;
  public musicRoutes: MusicRoutes;
  public artistRoutes: ArtistRoutes;

  constructor(app: express.Application) {
    this.app = app;
    this.userRoutes = new UserRoutes();
    this.musicRoutes = new MusicRoutes();
    this.artistRoutes = new ArtistRoutes();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.app.use(express.json()); // convert the request body into json (parse)
    this.app.use(express.urlencoded());
    this.app.use(cors());
    this.app.use("/api", this.userRoutes.router);
    this.app.use("/api", this.musicRoutes.router);
    this.app.use("/api", this.artistRoutes.router);
  }
}

export default Routes;
