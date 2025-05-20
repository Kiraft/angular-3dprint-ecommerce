import Color from "./Color3DModel";
import File3DModel from "./File3DModel";


export default interface Products3DModel {
  img: string;
  description: string;
  price: number;
  title: string;
  colors: Color[];
  quantity?: number;
  material?: string,
  fileModel?: File3DModel
}
