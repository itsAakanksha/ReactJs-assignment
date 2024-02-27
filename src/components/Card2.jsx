import React from "react";
// import { Link } from "react-router-dom";
import tv from '../assets/tv.jpg'
const Gift = () => {
  const gifts = [
    {
      thumbnail:
        tv,
      title: "WildBuilder",
      price: "$20",
      old_price: "$25",
      time: "Limited time",
      discount: 4.5,
      snippet: "A great gift for any occasion.",
    
    },
    {
      thumbnail:
        tv,
      title: "WildBuilder",
      price: "$20",
      old_price: "$25",
      time: "Limited time",
      discount: 4.5,
      snippet: "A great gift for any occasion.",
    
    },
    {
      thumbnail:
        tv,
      title: "WildBuilder",
      price: "$20",
      old_price: "$25",
      time: "Limited time",
      discount: 4.5,
      snippet: "A great gift for any occasion.",
    
    },
 
  
    // Add more gift objects as needed
  ];

  return (
    <div className="bg-body-tertiary">
    <div className="containers">
    <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
            {gifts.map((gift, index) => (
              <div
                key={index}
                className="flex flex-col items-stretch rounded-2xl shadow-xl overflow-hidden p-4 bg-gray-100 text-gray-600 max-w-sm "
              >
                <div className="product flex flex-col">
                  <img
                    className="product-img object-cover max-h-56 w-full rounded-lg m-auto "
                    src={gift.thumbnail}
                    alt={gift.title}
                  />
                  <div className="product-info flex flex-col">
                
                  <div className="flex items-center my-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold  px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      4.0
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                     limited time
                    </span>
                  </div>

                  <div>
                  <h4 className="text-center tracking-tight text-md uppercase font-semibold text-grey-300">
                  {gift.title}
                  </h4>
                  </div>
            
                  
                  <p className=" text-gray-600">
                  {gift.snippet}
                </p>

              <div className="flex gap-3 ">
              <div className="text-lg font-bold">{gift.price}</div>
              <div className="text-sm mt-auto">{gift.old_price}</div>
              <div className="text-red-500 mt-auto text-sm">(20% Off)</div>
              </div>

            

                   
                  </div>
                </div>
                <button className="w-full my-4 bg-blue-700 p-4 rounded-lg text-white">Buy Now</button>
              </div>
              
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Gift;