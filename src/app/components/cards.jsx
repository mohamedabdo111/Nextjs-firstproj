"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cards = ({ item }) => {
  //   console.log(item);
  return (
    <>
      {item ? (
        <div className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            {/* <img
                      alt="alt"
                      src={item.thumbnail}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    /> */}
            <Image
              src={item.thumbnail}
              alt={item.thumbnail}
              width={500}
              height={500}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            ></Image>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <Link href={`/products/${item.id}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {item.title}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{item.category}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{item.price}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Cards;
