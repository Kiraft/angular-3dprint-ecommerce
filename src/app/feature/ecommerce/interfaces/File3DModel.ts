import Color3DModel from "./Color3DModel";
import Material3DModel from "./Material3DModel";

export default interface File3DModel {
  type: string,
  name: string,
  size: number,
  file: File,
  dimensions?: { x: number; y: number; z: number },
  quantity: number,
  color?: Color3DModel,
  material?: Material3DModel,
  relleno?: number,
  isTest: boolean
}


