import React from "react";
import Image from "next/image";

const Searchbar = () => {
  return (
    <div className="search-from-clasic mt-5 col-span-12">
      <div className="hero-search-content ">
        <div className="grid grid-cols-12">
          <div className="col-span-10 sm:col-span-12 md:col-span-9 xl:col-span-10 lg:col-span-10">
            <div className="classic-search-box">
              <div className="form-group">
                <div className="choose-propert-type">
                  <ul className=" flex justify-center align-middle">
                    <li className="nav-item">
                      <button className="btn text-white font-semibold mr-2 bg-blue-500 py-7 px-8 rounded">
                        For Rent
                      </button>
                    </li>
                    <li className="">
                      <button
                        className="btn text-white font-semibold mr-2 bg-neutral-900 py-7 px-8 rounded"
                        type="button"
                      >
                        For Buy
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="form-group full">
                <div className="input-with-icon">
                  <input
                    type="text"
                    className="form-control form-input rounded-sm"
                    placeholder="Search for locality, landmark, project, or builder"
                  />
                  <Image src="/pin.svg" height={20} width={20} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-12 md:col-span-3 xl:col-span-2 flex justify-center items-center lg:col-span-2">
            <div className="form-group">
              <button
                type="submit"
                className="btn text-white font-semibold bg-blue-500  py-7 px-8  rounded"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
