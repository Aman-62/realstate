import React from "react";
import RecentPropertySingle from "./recentPropertySingle";
import Style from "../../styles/RecentProperty.module.css";

const RecentProperties = () => {
  return (
    <section className="bg-white py-1 pb-10 recentPropertySection">
      <div className="container mx-auto bg-white">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 text-center">
            <div
              className={`${Style.recentPropertiesHeader} sec-heading center mb-4`}
            >
              <h2 className={` my-4 font-bold`}>Recent Property in Noida</h2>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum
                <br />
                deleniti atque corrupti quos dolores
              </p>
            </div>
          </div>
        </div>

        <RecentPropertySingle />
      </div>
    </section>
  );
};

export default RecentProperties;
