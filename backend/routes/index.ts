import express from "express";
import cors from "cors";

class Routes {
  public app: express.Application;

  constructor(app: express.Application) {
    this.app = app;
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.app.use(express.json()); // convert the request body into json (parse)
    this.app.use(express.urlencoded());
    this.app.use(cors());
   
  }
}

export default Routes;
