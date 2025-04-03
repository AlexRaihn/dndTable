import { Application, Graphics } from "pixi.js";
import { MainScreen } from "./Screens/MainScreen";

export async function renderPixiApp(id: string) {
  // Create a new application
  const render = document.getElementById(id);
  if (!render) return null;
  // Initialize the application
  const app = new Application();
  console.log("lInitialize the applicationoad");
  await app.init({ resizeTo: render });

  const stageHeight = app.screen.height;
  const stageWidth = app.screen.width;

  let gridCont = new MainScreen().createContainer();
  gridCont.x = stageWidth / 2;
  gridCont.y = stageHeight / 2;

  app.stage.addChild(gridCont);

  // Make sure stage covers the whole scene
  app.stage.hitArea = app.screen;

  // Make the slider
  const sliderWidth = 320;
  const slider = new Graphics()
    .rect(0, 0, sliderWidth, 4)
    .fill({ color: 0x272d37 });

  slider.y = 800;

  // Draw the handle
  const handle = new Graphics().circle(0, 0, 8).fill({ color: 0xffffff });

  handle.y = slider.height / 2;
  handle.x = sliderWidth / 2;
  handle.eventMode = "static";
  handle.cursor = "pointer";

  handle
    .on("pointerdown", onDragStart)
    .on("pointerup", onDragEnd)
    .on("pointerupoutside", onDragEnd);

  app.stage.addChild(slider);
  slider.addChild(handle);

  // Listen to pointermove on stage once handle is pressed.
  function onDragStart() {
    app.stage.eventMode = "static";
    app.stage.addEventListener("pointermove", onDrag);
  }

  // Stop dragging feedback once the handle is released.
  function onDragEnd(e) {
    app.stage.eventMode = "auto";
    app.stage.removeEventListener("pointermove", onDrag);
  }

  // Update the handle's position & bunny's scale when the handle is moved.
  function onDrag(e) {
    const halfHandleWidth = handle.width / 2;
    // Set handle y-position to match pointer, clamped to (4, screen.height - 4).

    handle.x = Math.max(
      halfHandleWidth,
      Math.min(slider.toLocal(e.global).x, sliderWidth - halfHandleWidth)
    );
    // Normalize handle position between -1 and 1.
    const t = 2 * (handle.x / sliderWidth - 0.5);

    gridCont.scale.set(3 * (1.1 + t));
  }

  render.appendChild(app.canvas);
}
