import React from "react";
import Searchbar from "./searchbar";
import { useGlobalContext } from "@/pages/context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  // col-lg-9 col-md-11 col-sm-12
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center grid justify-center align-middle place-content-center grid-cols-12">
        <div className="col-span-10 justify-self-center align-middle mx-auto">
          <article className=" hero-info">
            <h1 className="font-bold">
              Discover A Beautiful
              <br />
              Place With Us
            </h1>
            <p>
              Would you explore nature paradise in the world, lets find the best
              property in Noida withus.
            </p>
          </article>
          <Searchbar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
