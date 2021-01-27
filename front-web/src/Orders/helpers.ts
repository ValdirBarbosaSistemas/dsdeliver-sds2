import { Product } from "./types"; //Pegando os dados do product de 'types'

// LÓGICA PARA DIZER SE ESTÁ SELECIONADO OU NÃO
export function checkIsSelected(selectedProducts: Product[], product: Product) {
  return selectedProducts.some((item) => item.id === product.id);
}

export function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatter.format(price);
}
