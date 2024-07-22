// "use client";
import React, { Suspense } from "react";
import GetAllProducts from "../Hooks/get-all-products";
import Link from "next/link";
import Image from "next/image";
import Sustext from "../components/sustext";
import Cards from "../components/cards";

const Products = async () => {
  const dataif = await GetAllProducts();

  //   console.log(dataif.products);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Suspense fallback={<h1>Loadingggg</h1>}>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            <Sustext></Sustext>
          </h2>
        </Suspense>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {dataif.data.products.map((item, index) => {
            return (
              <Suspense fallback={<p>Load ...</p>}>
                <Cards item={item} key={index}></Cards>
              </Suspense>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
