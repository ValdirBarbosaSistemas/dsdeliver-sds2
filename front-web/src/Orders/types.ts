import { type } from "os";

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUri: string;
  //Simbolizando os modelos dos dados do frontend
};

export type OrderLocationdata = {
  latitude: number;
  longitude: number;
  address: string;
};
