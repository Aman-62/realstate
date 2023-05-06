import React from "react";
import Searchbar from "./searchbar";
import { useGlobalContext } from "@/pages/context";
import Link from "next/link";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  // col-lg-9 col-md-11 col-sm-12
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center flex justify-center align-middle ">
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
