import { Graphics } from "pixi.js";

type gridBlock = {
  h: number;
  w: number;
  borderW: number;
  borderColor?: string;
};

type gridConfigOptions = {
  blockOptions: gridBlock;
  xCol: number;
  yCol: number;
};

export function renderGrid(
  gridConfig: gridConfigOptions = {
    blockOptions: { h: 49, w: 49, borderW: 1 },
    xCol: 50,
    yCol: 50,
  }
) {
  const grid = new Graphics();
  // Draw 10 vertical lines spaced 10 pixels apart
  for (let i = 0; i < gridConfig.xCol; i++) {
    for (let j = 0; j < gridConfig.yCol; j++) {
      grid
        .rect(
          i * (gridConfig.blockOptions.w + gridConfig.blockOptions.borderW),
          j * (gridConfig.blockOptions.h + gridConfig.blockOptions.borderW),
          gridConfig.blockOptions.w,
          gridConfig.blockOptions.h
        )
        .fill({ color: gridConfig.blockOptions.borderColor || "#FFFFFF" })
        .stroke({ width: gridConfig.blockOptions.borderW, color: 0x3e494b });
    }
  }

  return grid;
}
