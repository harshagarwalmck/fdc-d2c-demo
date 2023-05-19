import ImageContainer from "./ImageContainer";
import Flag from "./Flag";
import Productname from "./Productname";
import Price from "./Price";
import DefaultStatus from "./DefaultStatus";
import "./ProductTile.css";

const ProductTile = () => {
  return <div className="ProductTile"><ImageContainer></ImageContainer>
    <div className="Content"><Flag></Flag>
      <div className="Labels"><Productname></Productname>
        <span className="Brand">Brand
        </span>
      </div>
      <Price strikethrough></Price>
      <div className="Status"><DefaultStatus></DefaultStatus>
        <DefaultStatus></DefaultStatus>
      </div>
    </div>
  </div>;
};

export default ProductTile;