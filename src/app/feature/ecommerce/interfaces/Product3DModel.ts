import Color from "./Color3DModel";
import File3DModel from "./File3DModel";

export interface UrlFileModel {
  name: string,
  url: string
}

export default interface Products3DModel {
  img: string;
  description: string;
  title: string;
  name: string;
  urlFile: UrlFileModel[];
}
