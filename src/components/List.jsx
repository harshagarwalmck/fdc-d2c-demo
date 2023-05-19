import "../index.css";
import "./List.css";
import ProductTile from "./ProductTile";

const List = () => {
  return <ul className="RootWrapperList">
    <ProductTile></ProductTile>
    <ProductTile></ProductTile>
    <ProductTile></ProductTile>
    <ProductTile></ProductTile>
    <ProductTile></ProductTile>
    <ProductTile></ProductTile>
    <ProductTile></ProductTile>
    <ProductTile></ProductTile>
  </ul>;
};

export default List;