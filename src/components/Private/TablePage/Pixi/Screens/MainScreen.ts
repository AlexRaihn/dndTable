import { Container } from "pixi.js";
import { renderGrid } from "../components/grid";

export class MainScreen {
  gridContainer = new Container();
  createContainer() {
    this.gridContainer = renderGrid({
      blockOptions: {
        w: 24,
        h: 24,
        borderW: 1,
      },
      xCol: 30,
      yCol: 30,
    });
    return this.gridContainer;
  }
}
