import {
  Application,
  type ApplicationOptions,
  type ContainerChild,
} from "pixi.js";
import createConfig from "./config";

export async function renderPixiApp<T = ApplicationOptions>(
  id: string,
  config: T,
  child: ContainerChild
) {
  // Create a new application
  const app = new Application();
  // Initialize the application
  await app.init(createConfig(config));
  // Append the application canvas to the document body

  app.stage.addChild(child);

  const render = document.getElementById(id);
  if (render) render.appendChild(app.canvas);
}
