export default interface Order{
  orderId: number,
  date: Date,
  price: number,
  status: 'cancel' | 'process' | 'confirmed'
  address: string
  products: [],

}
