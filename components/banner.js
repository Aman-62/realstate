import React from "react";
import { useGlobalContext } from "@/pages/context";

const Banner = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="banner" onMouseOver={closeSubmenu}>
      <div className="container mx-auto">
        <div className="py-12">
          <h1 className="text-neutral-100 font-bold m-0 mb-2">
            Submit Property
          </h1>
          <p className="text-blue-300 m-0">
            Manage your profile and view property
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
