import OrderLocation from "./OrderLocation";

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUri: string;
  //Simbolizando os modelos dos dados do frontend
};

export type OrderLocationData = {
  latitude: number;
  longitude: number;
  address: string;
};

type ProductId = {
  id: number;
};

export type OrderPayload = {
  products: ProductId[];
  // latitude: number; (PARA NÃO PRECISAR DE FAZER ISSO, BASTA COLOCAR UM '&' E O
  // longitude: number; NOME DO TIPO QUE QUER PEGAR OS DADOS)
  // address: string;
} & OrderLocationData;
