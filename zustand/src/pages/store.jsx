import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";
import { create } from "zustand";

const fetchProduct = () => {
  return axios.get("https://fakestoreapi.com/products").then(res => res.data);
};

const useProductStore = create((set) => ({
  products: [],
  isLoading: false,
  loadProducts: async () => {
    set({ isLoading: true });
    const data = await fetchProduct();
    set({ products: data, isLoading: false });
  },
}));

function ProductsList() {
  const products = useProductStore((state) => state.products);

  return (
    <div>
      {products.map((product) => (
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
  const loadProducts = useProductStore((state) => state.loadProducts);
  const isLoading = useProductStore((state) => state.isLoading); 
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <>
      <div className="text-white">Store</div>
      <hr />
      {isLoading && <h1>Loading..</h1>}
      <ProductsList />
    </>
  );
};

export default Store;
