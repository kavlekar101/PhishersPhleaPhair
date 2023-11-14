import React from "react";
import {ProductTile} from "./tile.js";

class ProductCatalog extends React.Component {
  renderTile = (item_0, item_1, item_2) => {
    return <div class="columns">
      <div class="column is-one-third">
        <ProductTile product={item_0}></ProductTile>
      </div>
      <div class="column is-one-third">
        <ProductTile product={item_1}></ProductTile>
      </div>
      <div class="column is-one-third">
        <ProductTile product={item_2}></ProductTile>
      </div>
    </div>;
  }
  render() {
    let tiles = [];
    for (let i = 0; i < this.props.products.length; i=i+3) {
      const item_0 = this.props.products[i];
      const item_1 = this.props.products[i + 1];
      const item_2 = this.props.products[i + 2];
      tiles.push(this.renderTile(item_0, item_1, item_2));
    }
    return tiles;
  }
}

export {ProductCatalog}
