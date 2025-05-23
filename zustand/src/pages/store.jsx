import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import {create} from 'zustand';

const useProductStore = create((set)=>{
  return{
    products :[],
    setProducts : ()=>{
      return set({
        products :[1,2,3],
      });
    }
  }
})

function ProductsList(pros) {
  return (
    <div>
      {pros.products.map((product) => (
        <ul key={product.id}>
          <Link style={{ color: "white" }} to={`/store/dp/${product.id}`}>
            {product.title}
          </Link>
        </ul>
      ))}
    </div>
  );
}

const Store = () => {
  const store = useProductStore();
  console.log(store)
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      store.setProducts();
    });
  }, []);
  return (
    <>
      <div>store</div>
      <hr />
      <ProductsList products={products} />
    </>
  );
};

export default Store;
