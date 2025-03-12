import type { ApplicationOptions } from "pixi.js";

function createConfig<T = ApplicationOptions>(config: T): T {
  return config;
}

export default createConfig;
