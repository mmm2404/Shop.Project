import "./itemcomment.css"

export interface itemCommentProps {  
    name: string,    
    body: string,    
  }
  export const ItemComment = ({
    name,    
    body, 
    }: itemCommentProps) => {
  
    return (
      <div className="item-comment">
      <p className="item-comment-name"> {name} </p>
      <p className="item-comment-content"> {body} </p>
    </div>
      
    );
  }