import React, { useState } from "react";

import { Modal } from "components/Modal";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51K7GflCG8pk8NE3DpeqwjqqAlRoKXkTG3ArL8fBcpggnScVb9QhQbHlWo4x4hpehCgbkMLwLsecSnbc69YNHxrdB00QwnLGx5k"
);

export const Home = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="my-16 text-4xl font-light flex">
        <div className="bg-black/90 p-4">ElloExhibit</div>
      </div>
      {/* <div className="my-10 flex">
        <div className="bg-black/90 p-4">
          {" "}
          ElloExhibit is a monthly showcase of work by designers from the
          Talenthouse platform. All featured Creatives receive a revenue share
          of admission revenue. Artworks can be purchased in the NFT gift shop.
        </div>
      </div> */}
      <div className="py-10 pr-40 flex border-t">
        <div>
          <div className="uppercase font-bold text-lg">
            FCK 2020 - A celebration of creativity in the face of adversity
          </div>
          <div className="">Curated by: H.P. Baxxter (Scooter)</div>
          <div className="italic my-5">December 16th - January 31st</div>
          <div className="italic mt-5">
            Your ticket to an exclusive virtual exhibition curated by H.P.
            Baxxter of Hamburg rave group Scooter featuring the hottest artwork
            of 2021 from creatives across the Talenthouse and Ello Art sites.
          </div>
          <div className=" mt-5">
            £10 Admission. 50% of all monies shared with featured Creatives
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setVisible(true)}
          className="border px-6 py-4 font-bold hover:bg-white hover:text-black"
        >
          Enter the Exhibition
        </button>
      </div>
      <Elements stripe={stripePromise}>
        <Modal setVisible={setVisible} visible={visible}>
          payment form
        </Modal>
      </Elements>
    </div>
  );
};
