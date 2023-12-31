import "./interface.css";
import { Link } from "react-router-dom";

export const Interface = ()=> {
  return (
    <div>
      <p className="text-body">
        «В базе данных находится n товаров общей стоимостью m», где «n» — общее количество товаров в базе, а «m» – их суммарная стоимость.
      </p>

      <div className="button-container">
        <Link to={`/products-list`}>
          <button className="btn-primary" type="button">
            Перейти к списку товаров
          </button>
        </Link>
        
        <Link to={`http://localhost:3000/admin/`}>        
          <button className="btn-secondary" type="button">
            Перейти в систему администрирования
          </button>
        </Link>
      </div>
    </div>
  );
}