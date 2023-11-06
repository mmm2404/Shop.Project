import { IProduct, ISimilar} from "./redux/types";
import axios from 'axios';

// полные данные продукта
export const getProduct = async (
  id: string,
  doSuccessProduct: (data: IProduct) => void,
  doErrorProduct: () => void) => {

  const config = {
    method: 'get',
    url: `http://localhost:3000/api/products/${id}`,
    headers: { 'Content-Type': 'application/json' },
  }

  await axios(config)
    .then(response => {
      console.log('Response', response.data)
      const data: IProduct = response.data;
      doSuccessProduct(data);
    })
    .catch(e => {
      console.log('Error: ', e.message)
      doErrorProduct();
    })
}

// url: 'http://localhost:3000/api/products/similars/:id'
export const getSimilar = async (
  id: string,
  doSuccessSimilar: (data: ISimilar[]) => void,
  doErrorSimilar: () => void) => {

  const config = {
    method: 'get',
    url: `http://localhost:3000/api/products/similars/${id}`,
    headers: { 'Content-Type': 'application/json' },
  }
  await axios(config)
    .then(response => {
      console.log('Response', response.data)
      const data: ISimilar[] = response.data;
      doSuccessSimilar(data);
    })
    .catch(e => {
      console.log('Error: ', e.message)
      doErrorSimilar();
    })


}

export const setNewComment = async (
  productId: string,
  name: string,
  email: string,
  body: string,
  doSuccessNewComment: (data: string) => void,
  doErrorNewComment: () => void
) => {

  const config = {
    method: 'post',
    url: `http://localhost:3000/api/comments`,
    data: {      
      name: name,
      email: email,
      body: body,
      productId: productId
    }
  }

  

  await axios(config)
    .then(response => {
      // console.log('Response', response.data)
      const data: string = response.data;
      doSuccessNewComment(data);
    })
    .catch(e => {
      console.log('Error: ', e.message)
      doErrorNewComment();
    })

}

// Заполнение списка товаров из АПИ
// http://localhost:3000/api/products/
export const getProducts = async (doSuccess: (data: IProduct[]) => void, doError: () => void) => {

  const config = {
    method: 'get',
    url: 'http://localhost:3000/api/products',
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json'
    },
  }

  await axios(config)
    .then(response => {
      console.log('Response', response.data)
      const data: IProduct[] = response.data;
      doSuccess(data);
    })
    .catch(e => {
      console.log('Error: ', e.message)
      doError();
    })
}