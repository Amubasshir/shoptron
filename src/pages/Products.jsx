import React from 'react';
import { useSelector } from 'react-redux';
import ProductCart from '../components/ProductCart';

const Products = () => {
  const { items: data, status } = useSelector((state) => state.products);
  return (
    <div className="products-section container mx-auto py-10">
      <h2 className="section-title uppercase text-4xl font-serif text-center mb-10">
        Browse all products
      </h2>
      <div className="products-wrapper grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
        {status && <p className="col-span-full text-center">{status}</p>}

        {data.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
