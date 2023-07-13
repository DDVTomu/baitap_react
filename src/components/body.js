import React from "react";
import Item from "./Body/item";
import Glasses from "./glasses";
import Shoes from "./shoes";
import Movie from "./movie";
export default function Body() {
  return (
    <>
      {" "}
      <section className="pt-4">
        <div className="container px-lg-5">
          {/* <Item /> */}
          <Glasses />
          <Shoes />
          <Movie />
        </div>
      </section>
    </>
  );
}
