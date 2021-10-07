import React, {useEffect, useState} from 'react';
import {Button, Grid} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch, useSelector} from "react-redux";
import {setCatalogues} from "../../store/reducers/event";

import './style.scss';

const Home = () => {
  const [products, setProducts] = useState(useSelector((state) => state.event.products));
  const [totalPrice, setTotalPrice] = useState(0);
  const user = useSelector((state) => state.event.user);
  const dispatch = useDispatch();

  useEffect(() => {
    let price = 0;
    products.map((product) => {
      price += product.price;
    });
    setTotalPrice(price);
  }, [products]);

  const handleDeleteProduct = (item) => {
    if (user !== 'admin') {
      return;
    }
    const filteredProducts = products.filter((product) => product !== item);
    setProducts(filteredProducts);
    dispatch(setCatalogues(filteredProducts));
  };

  const removeAllCategory = () => {
    if (user !== 'admin') {
      return;
    }

    setProducts([]);
    dispatch(setCatalogues([]));
  };

  return (
    <div className="homepage">
      <div className="container">
        <h1>Product Catalogue</h1>
        <div className="products-summary">
          <div className="price-info">
            <p className="total">
              Total:
              {' '}
              <span>{products.length}</span>
            </p>
            <p className="total-price">
              Total Price:
              {' '}
              <span>$ {Math.round(totalPrice * 100) / 100}</span>
            </p>
            <p className="total-price">
              Average Price:
              {' '}
              <span>$ {products.length ? Math.round(totalPrice / products.length * 100) / 100 : 0}</span>
            </p>
          </div>
          {user === 'admin' && (
              <Button
                  variant="contained"
                  className="btn-delete-all"
                  startIcon={<DeleteIcon />}
                  onClick={removeAllCategory}
              >
                Remove All
              </Button>
          )}
        </div>
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <div className="product-card">
                <img src={`/assets/products/${product.image}.png`} alt="product" />
                <div className="product-info">
                  <div className="d-flex justify-content-between mb-2">
                    <p className="name mb-0">{product.name}</p>
                    <p className="price mb-0 text-danger">$ {product.price}</p>
                  </div>
                  <p className="description">{product.description}</p>
                  {user === 'admin' && (
                    <div className="d-flex justify-content-end">
                      <Button
                          variant="contained"
                          className="btn-delete"
                          startIcon={<DeleteIcon />}
                          onClick={() => handleDeleteProduct(product)}
                      >
                        Delete
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Home;
