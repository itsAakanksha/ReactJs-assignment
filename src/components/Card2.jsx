import React from "react";
// import { Link } from "react-router-dom";
import tv from '../assets/tv.jpg'
import { productCard } from "../data";
const product = () => {

  return (
    <div className="bg-body-tertiary">
    <div className="containers">
    <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8">
            {productCard.map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-stretch rounded-2xl shadow-xl overflow-hidden p-4 text-gray-600 max-w-sm "
              >
                <div className="product flex flex-col">
                  <img
                    className="product-img object-cover max-h-56 w-full rounded-lg m-auto "
                    src={product.thumbnail}
                    alt={product.title}
                  />
                  <div className="product-info flex flex-col">
                
                  <div className="flex items-center my-2">
                    <span className="bg-gray-200 text-blue-800 text-xs font-semibold  px-2.5 py-0.5 rounded  ml-3">
                      4.0
                    </span>
                    <span className="bg-gray-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded   ml-3">
                     limited time
                    </span>
                  </div>

                  <div>
                  <h4 className="text-center tracking-tight text-md uppercase font-semibold text-grey-300">
                  {product.title}
                  </h4>
                  </div>
            
                  
                  <p className=" text-gray-600">
                  {product.snippet}
                </p>

              <div className="flex gap-3 ">
              <div className="text-lg font-bold">{product.price}</div>
              <div className="text-sm mt-auto">{product.old_price}</div>
              <div className="text-red-500 mt-auto text-sm">(20% Off)</div>
              </div>

            

                   
                  </div>
                </div>
                <button className="w-full my-4 bg-[#1B88F4] p-2 rounded-lg text-white">View Deal</button>
              </div>
              
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default product;