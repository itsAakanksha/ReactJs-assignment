import React from "react";
import ProfessionalCard from "./Card";
import Gift from "./Card2";

function Header() {
  return (
    <div className="text-black p-4">
    <div className="md:w-3/4 mx-auto m-4 flex flex-col items-center gap-3">
    <h1 className="text-3xl md:text-5xl self-start text-gray-700">
          Best Website builders in the US
        </h1>

        <div className="border-y-2 flex flex-col md:flex-row w-full md:gap-10 p-2 text-sm text-gray-600">
        <div className="mb-2 md:mb-0">
          <i className="fa fa-check-circle text-gray-400 px-2"></i>
          Last Updated - February 22, 2020
        </div>
        <div className="mb-2 md:mb-0">
          <i className="fa fa-info-circle text-gray-400 text-xs px-2"></i>
          Advertising Disclosure
        </div>
        <div className="ml-auto">
          Top Relevant
          <i className="fa fa-chevron-down text-gray-400 px-2"></i>
        </div>
      </div>
 <div className="my-2 flex flex-wrap gap-4 text-xs text-gray-600">
          <div>Tools</div>
          <div>AWS Builders</div>
          <div>Start Build</div>
          <div>Build Supplies</div>
          <div>Tooling</div>
          <div>Blue Hosting</div>
        </div>

        <div className="text-slate-500 my-2 flex w-full gap-2 text-xs">
          <div>home</div>
          <div>
            <i>
              <strong>&gt;</strong>
            </i>{" "}
            HOSTING FOR ALL
          </div>
          <div>
            <i>
              <strong>&gt;</strong>
            </i>{" "}
            HOSTING
          </div>
          <div>
            <i>
              <strong>&gt;</strong>
            </i>{" "}
            HOSTING 6
          </div>
          <div>
            <i>
              <strong>&gt;</strong>
            </i>{" "}
            HOSTING 5
          </div>
        </div>

        <div className="first-card ">
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
          <ProfessionalCard />
        </div>

        <h1 className="text-2xl self-start">
          Related Deals you might like for
        </h1>
        <div>
          <Gift />
        </div>

        <div className="w-full  flex flex-col md:flex-row justify-between items-center">
          <div className="content  text-xl md:text-3xl md:w-1/3 m-4">
            Signup up and get exclusive special deal
          </div>
          <div className=" text-white md:w-1/2 flex justify-between h-[50px] ">
            <input type="text" className="text-black w-full" />
            <span className="bg-blue-500 ml-auto rounded-r-lg  py-4 px-4 text-center">
              Signup
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
