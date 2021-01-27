import axios from "axios";
import { OrderPayload } from "./Orders/types";

const API_URL = "http://localhost:8080"; //Criando uma constante para não ficar digitando o caminho para o backend
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX; //Chamando o token criado

export function fetchProducts() {
  return axios(`${API_URL}/products`);
}

export function fetchLocalMapBox(local: string) {
  return axios(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`
  );
}
//PARA PODER LOCALIZAR OS LUGARES É PRECISO CRIAR UMA CONTA DO MAPBOX E PEGAR O TOKEN

export function saveOrder(payload: OrderPayload) {
  return axios.post(`${API_URL}/orders`, payload);
} //SALVANDO OS DADOS NO BANCO DE DADOS
