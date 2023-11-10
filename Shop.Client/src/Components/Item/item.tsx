/* eslint-disable react-hooks/rules-of-hooks */
import "./item.css"
import { useSelector } from "react-redux";
import { RootState,useAppDispatch } from "../../main";
import { ItemImage } from "../ItemImage/itemimage";
import { ItemComment } from "../ItemComment/itemcomment";
import { AddComment } from "../AddComment/addcomment";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/loader"
import { IProduct } from "../../redux/types";
import { getProduct} from "../../requests"
import {showLoadingProduct,emptyProduct,setComments} from "../../redux/slices"
import { useState, useEffect } from "react";



export const Item = () => {
  
  const params = useParams();
  const dispatch = useAppDispatch();
  const productId = params.productId;
  const [product, setProduct] = useState(emptyProduct);
//   const [similar, setSimilar] = useState([emptySimilar]); 
 
  
// Обработка запросов к апи  
const doSuccessProduct = (data: IProduct) => {
   setProduct(data);
   dispatch(setComments(data.comments));
   dispatch(showLoadingProduct(false));

}
const doErrorProduct = () => {
  dispatch(setComments([]));  
  dispatch(showLoadingProduct(false));
}  
// const doSuccessSimilars = (data: ISimilar[]) => {
//    setSimilars(data);   
// }
// const doErrorSimilars = () => {
//   setSimilars([]);     
// }


if (!productId)  return

if (!product.id) {
getProduct(productId,doSuccessProduct,doErrorProduct); }
// getSimilars(productId,doSuccessSimilars,doErrorSimilars); }


// Начальное состояние коментов из базы
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {

dispatch(setComments(product.comments));  
}, []);

// загрузчик состояние
// eslint-disable-next-line react-hooks/rules-of-hooks
const loading = useSelector((state: RootState) => {
    return state.productSlices.loading;
})

//  прорисовка измененных 
const comments = useSelector((state: RootState) => {
  return state.productSlices.comments;
})

// прорисовываю фото кроме главного
  let productImagesReactNodes;
  if (product.images)
    productImagesReactNodes = product.images.map(element => (
      (element.id !== product.thumbnail?.id) && <ItemImage key={element.id} src={element.url} />
    ))
// коменты
  let productCommentsReactNodes;
  if (comments)
    productCommentsReactNodes = comments.map(element => (
      <ItemComment key={element.id} name={element.name} body={element.body} />
    ))
// похожие
//   let productSimilarReactNodes;
//   if (!(!similars))
//     productSimilarReactNodes = similars.map(element => (
//       <ItemSimilar key={element.id} title={element.title} price={element.price} />
//     ))
    
  return (
    <div className="item">
      {loading && <Loader />}

      {(!loading) && <div className="item-presentation">
        <div className="item-image-thumbnail">
          <img src={product.thumbnail?.url} alt={product.thumbnail?.url}></img>
        </div>
        <div className="item-info">
          <div className="item-title"> {product.title} </div>
          <div className="item-description">{product.description} </div>
          <div className="item-price">Price: &nbsp;{product.price} </div>
        </div>
      </div>}

      <div className="line" ></div>


      {(!loading) && <div className="item-title-header"> Other photo </div>}
      {!loading && <div className="item-images">
        {productImagesReactNodes}
      </div>}

      <div className="line" ></div>

      {/* <!-- коментарии --> */}
      {!loading && <div className="item-title-header"> Comments </div>}
      {!loading && <div className="item-comments">
        {productCommentsReactNodes}
      </div>}

      <div className="line" ></div>

      {/* <!--ввод нового  коментария --> */}
      {!loading && <AddComment product={product} productComments = {comments} />}

      <div className="line" ></div>

      {!loading && <div className="item-title-header"> Similars </div>}
      {!loading && <div className="similars">
        {/* {productSimilarReactNodes} */}
      </div>
      }
    </div>
  );
}