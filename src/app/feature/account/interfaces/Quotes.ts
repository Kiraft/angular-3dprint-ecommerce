import File3DModel from "../../ecommerce/interfaces/File3DModel";
import File3DQuote from "../../ecommerce/interfaces/File3DQuote";
import UserAddress from "../../ecommerce/interfaces/UserAddress";

export default interface Quotes {
  id: string,
  date: Date,
  price: number,
  status: | "Fabricando"  | 'Enviado' | 'Entregado' | "Cancelado" ,
  statusQuote: 'Pendiente' | "Aceptado"  | 'Rechazado' ,
  address: UserAddress,
  products: File3DQuote[],
  paymentMethod: 'Visa' | 'Mastercard' | 'Paypal',
  discount: number,
  shippingPrice: number,
  shippingType: 'Estandar' | 'Express'
}
