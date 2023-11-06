import "./itemimage.css"

export interface itemImageProps {
    src: string,    
  }
  export const ItemImage = ({
    src,
    }: itemImageProps) => {
  
    return (
      <div className="item-image-container">
        <img className="item-image" src={src} alt={src}></img>
        </div>
      
    );
  }