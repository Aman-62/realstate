import React from "react";

const Searchbar = () => {
  return (
    <div className="search-from-clasic mt-5">
      <div className="hero-search-content">
        <div className="grid grid-cols-12">
          <div className="col-span-10 sm:col-span-12 md:col-span-9 xl:col-span-10 lg:col-span-10">
            <div className="classic-search-box">
              <div className="form-group">
                <div className="choose-propert-type">
                  <ul className="nav nav-pills" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="btn text-white font-semibold mr-2 bg-blue-500 py-8 px-10 rounded"
                        id="for-rent"
                        data-bs-toggle="tab"
                        data-bs-target="#rents"
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        For Rent
                      </button>
                    </li>
                    <li
                      className="btn text-white font-semibold bg-neutral-900 py-8 px-10 rounded"
                      role="presentation"
                    >
                      <button
                        className="nav-link"
                        id="for-buy"
                        data-bs-toggle="tab"
                        data-bs-target="#buys"
                        type="button"
                        role="tab"
                        aria-selected="false"
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
                    className="form-control"
                    placeholder="Search for locality, landmark, project, or builder"
                  />
                  <img src="assets/img/pin.svg" width={20} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-12 md:col-span-3 xl:col-span-2 flex justify-center items-center lg:col-span-2">
            <div className="form-group">
              <button
                type="submit"
                className="btn text-white font-semibold bg-blue-500 py-8 px-10 rounded"
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
