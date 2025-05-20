export default interface File3DModel {
  type: string,
  name: string,
  size: number,
  file: File,
  dimensions?: { x: number; y: number; z: number },
  quantity: number
}
