import File3DModel from "../../ecommerce/interfaces/File3DModel";
import UserAddress from "../../ecommerce/interfaces/UserAddress";

export default interface Quotes {
  id: string,
  date: Date,
  price: number,
  status: | "Fabricando"  | 'Enviado' | 'Entregado' | "Cancelado" ,
  statusQuote: 'Pendiente' | "Aceptado"  | 'Rechazado' ,
  address: UserAddress,
  products: File3DModel[],
  paymentMethod: 'Visa' | 'Mastercard' | 'Paypal',
  discount: number,
  shippingPrice: number,
  shippingType: 'Estandar' | 'Express'
}
