import React from "react";
import { useGlobalContext } from "@/pages/context";

const Banner = props => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="banner" onMouseOver={closeSubmenu}>
      <div className="container mx-auto">
        <div className="py-12">
          <h2 className="text-neutral-100 font-bold m-0 mb-2">{props.name}</h2>
          <p className="text-blue-300 m-0">{props.msg}</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
