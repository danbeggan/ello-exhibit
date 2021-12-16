import React, { useState } from "react";

import { Modal } from "components/Modal";

import { Elements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51K7GflCG8pk8NE3DpeqwjqqAlRoKXkTG3ArL8fBcpggnScVb9QhQbHlWo4x4hpehCgbkMLwLsecSnbc69YNHxrdB00QwnLGx5k"
);

export const Home = ({ setShowGallery }) => {
  const [visible, setVisible] = useState(false);
  const [checkoutError, setCheckoutError] = useState();
  const [isProcessing, setProcessingTo] = useState(false);

  const handleCardDetailsChange = (ev) => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();
    setProcessingTo(true);
    setShowGallery(true);

    if (!checkoutError) {
      // If valid

      setProcessingTo(false);
    } else {
      setProcessingTo(false);
    }
  };

  const iframeStyles = {
    base: {
      color: "#fff",
      fontSize: "16px",
      iconColor: "#fff",
      "::placeholder": {
        color: "#fff",
        border: "1px solid #FFF",
      },
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "#FFC7EE",
    },
    complete: {
      iconColor: "#cbf4c9",
    },
  };

  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true,
  };

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
          <div className="mb-4 bold">Order summary</div>
          <div className="flex justify-between mb-8">
            <div>1 x General Admission</div>
            <div>£10</div>
          </div>
          <form className="bg-black" onSubmit={handleFormSubmit}>
            <CardElement
              options={cardElementOpts}
              onChange={handleCardDetailsChange}
            />
            <div className="flex flex-col items-center mt-10">
              {checkoutError && false && (
                <div className="mb-2" style={{ color: "#FFC7EE" }}>
                  {"Check your details"}
                </div>
              )}
              <button
                disabled={isProcessing}
                type="Submit"
                className="mt-4 border px-6 py-4 font-bold hover:bg-white hover:text-black"
              >
                Let me in
              </button>
            </div>
          </form>
        </Modal>
      </Elements>
    </div>
  );
};
