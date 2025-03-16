import { Application, Container } from "pixi.js";
import { renderGrid } from "./components/grid";

export async function renderPixiApp(id: string) {
  // Create a new application
  const app = new Application();
  const render = await document.getElementById(id);
  console.log(render);
  if (!render) return null;
  // Initialize the application
  console.log("load");
  await app.init({ resizeTo: render });

  const gridContainer = new Container();
  gridContainer.addChild(
    renderGrid({
      blockOptions: {
        w: 39,
        h: 39,
        borderW: 1,
      },
      xCol: 50,
      yCol: 50,
    })
  );
  app.stage.addChild(gridContainer);

  render.appendChild(app.canvas);
}
