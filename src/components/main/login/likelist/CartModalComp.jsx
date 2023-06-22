import React from "react";
import "magnific-popup/dist/magnific-popup.css";
import "./cartModalComp.css";

const CartModalComp = () => {
  return (
    <div>
      <a className="popup-with-zoom-anim" href="#small-dialog">
        Open with fade-zoom animation
      </a>
      <br />
      <a className="popup-with-move-anim" href="#small-dialog">
        Open with fade-slide animation
      </a>

      <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
        <h1>Dialog example</h1>
        <p>
          This is dummy copy. It is not meant to be read. It has been placed
          here solely to demonstrate the look and feel of finished, typeset
          text. Only for show. He who searches for meaning here will be sorely
          disappointed.
        </p>
      </div>
    </div>
  );
};

export default CartModalComp;
