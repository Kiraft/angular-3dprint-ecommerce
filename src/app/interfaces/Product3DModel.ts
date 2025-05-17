import Color from "./Color3DModel";


export default interface Products3DModel {
  img: string;
  description: string;
  price: number;
  title: string;
  colors: Color[];
}
