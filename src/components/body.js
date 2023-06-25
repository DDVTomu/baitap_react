import React from "react";
import Item from "./Body/item";
import Glasses from "./glasses";
export default function Body() {
  return (
    <>
      {" "}
      <section class="pt-4">
        <div class="container px-lg-5">
          {/* <Item /> */}
          <Glasses />
        </div>
      </section>
    </>
  );
}
