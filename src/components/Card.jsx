import React from "react";
import { useState } from "react";
import tv from "../assets/tv.jpg";

const ProfessionalCard = () => {
  const [showHighlights, setShowHighlights] = useState(false);

  const toggleHighlights = () => {
    setShowHighlights(!showHighlights);
  };
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full mx-auto relative gap-5 my-4">
      {/* Badge */}
      <div className="z-10 absolute top-0 left-0 bg-orange-500 text-white py-1 px-2 rounded-r-lg">
        <span className="flex items-center">
          <i className="fa fa-light fa-trophy">{""}</i>
          Best Choice
        </span>
      </div>

      {/* Image Section */}
      <div className="md:w-1/3 relative">
        <img
          className="w-full h-auto md:h-full object-contain "
          src={tv}
          alt="Card Image"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-2/3 p-6 flex">
        {/* Paragraph */}
        <p className="text-gray-700 text-sm mb-4">
          <span className="font-bold">
            Wix pro 27 inch Responsive website Builder -{" "}
          </span>
          Comprehensive Digital platform creation tool Stramedline design
          interface for professional website and online stores
          <br />
          <span className="font-bold">Main highlights</span>
          <br />
          [What You Get]: Receive the WixPro website builder suite, access to
          premium design templates, an extensive library of widgets and apps,
          and detailed step-by-step guides
          <br />
          <p className="mt-4">
          <span
          className="text-blue-400 cursor-pointer"
          onClick={toggleHighlights}
        >
          {showHighlights ? "Show less" : "Show more"}{" "}
          <i className={`fa fa-chevron-${showHighlights ? 'up' : 'down'} px-2`}></i>
        </span>
          </p>
          <br />
          {showHighlights && (
          <p className=" highlight w-[90%] rounded-md flex flex-col gap-2 mx-auto bg-orange-200 h-min-[100px] p-4 opacity-4">
            <div >
              {" "}
              <span className="bg-gray-200 text-blue-800 text-xs font-semibold  px-2.5 py-0.5 rounded  ml-3">
                9.9
              </span>
             <span className="px-2"> Building responsive</span>
            </div>
            <div>
              {" "}
              <span className="bg-gray-200 text-blue-800 text-xs font-semibold  px-2.5 py-0.5 rounded  ml-3">
                8.9
              </span>
              <span className="px-2"> Cool</span>
            </div>
            <div>
              {" "}
              <span className="bg-gray-200 text-blue-800 text-xs font-semibold  px-2.5 py-0.5 rounded  ml-3">
                8.9
              </span>
              <span className="px-2"> Docs</span>
            </div>
          </p>

          )}
        </p>
      </div>

      <div className="flex flex-col justify-between md:w-1/3 ">
        <div className="flex flex-col flex-grow-4 bg-gray-100  items-center  md:rounded-b-lg m-4 md:mx-auto md:px-2 mt-0">
          <i className="fa fa-info-circle text-gray-400 self-end text-xs"></i>{" "}
          <div className="text-3xl font-semi-bold text-blue-900">4.5</div>
          <div className="ml-2 text-blue-800">exceptions</div>
          <div className="flex items-center my-2 gap-1">
            <i className="fa fa-star text-yellow-400 text-xs "></i>
            <i className="fa fa-star text-yellow-400 text-xs"></i>
            <i className="fa fa-star text-yellow-400 text-xs"></i>
            <i className="fa fa-star text-yellow-400 text-xs"></i>
            <i className="fa fa-star text-yellow-400 text-xs"></i>
          </div>
        </div>

        <button className="bg-[#1B88F4] text-white py-2 px-4 rounded-lg mx-2 hover:bg-blue-700">
          View
        </button>
      </div>
    </div>
  );
};

export default ProfessionalCard;
