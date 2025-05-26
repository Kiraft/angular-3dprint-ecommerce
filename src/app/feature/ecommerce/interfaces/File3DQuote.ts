export default interface File3DQuote {
  name: string,
  fileURL: string,
  dimensions: { x: number; y: number; z: number },
  quantity: number,
  color: string,
  material: string,
  relleno: number,
  unit_price: number
}
