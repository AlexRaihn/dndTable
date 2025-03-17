import { Application, Container } from "pixi.js";
import { renderGrid } from "./components/grid";

export async function renderPixiApp(id: string) {
  // Create a new application
  const render = document.getElementById(id);
  if (!render) return null;
  // Initialize the application
  const app = new Application();
  console.log("lInitialize the applicationoad");
  await app.init({ resizeTo: render });

  const gridContainer = new Container();
  gridContainer.addChild(
    renderGrid({
      blockOptions: {
        w: 34,
        h: 34,
        borderW: 1,
      },
      xCol: 50,
      yCol: 50,
    })
  );
  app.stage.addChild(gridContainer);

  render.appendChild(app.canvas);
}
