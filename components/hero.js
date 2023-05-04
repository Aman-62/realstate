import React from "react";
import Searchbar from "./searchbar";
import { useGlobalContext } from "@/pages/context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1 className="font-bold">
            Discover A Beautiful
            <br />
            Place With Us
          </h1>
          <p>
            Would you explore nature paradise in the world, let't find the best
            property in Noida withus.
          </p>
        </article>
        <Searchbar />
      </div>
    </section>
  );
};

export default Hero;
