import React from "react";
import { useState } from "react";
import "./tile.css";
import "../../node_modules/bulma/css/bulma.css";

class ProductTile extends React.Component {
  addOne() {
    this.amount = this.amount + 1;
    alert("Added one! Amount: " + this.amount);
  }
  removeOne() {
    this.amount = this.amount - 1;
    alert("Removed one! Amount: " + this.amount);
  }

  render() {
    const image = this.props.product.image;
    return (
      <div class="card" card-color="#000000">
        <div class="card-image">
          <figure class="image is 4by3">
            <img src={image}></img>
          </figure>
        </div>
        <div class="card-content">
          <p class="title product-title">{this.props.product.product}</p>
            <div class="content">
              {this.props.product.description}
              <br></br>
            </div>
            <div class="columns">
              <div class="column is-half">
                <a class="button is-info is-fullwidth is-responsive" onClick={this.addOne}>
                  <strong>+</strong>
                </a>
              </div>
              <div class="column is-half">
                <a class="button is-info is-fullwidth is-responsive" onClick={this.removeOne}>
                  <strong>-</strong>
                </a>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export {ProductTile};
