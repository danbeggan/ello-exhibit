import React from "react";

export const Home = () => {
  return (
    <div>
      <div className="mt-16 text-4xl font-light flex">
        <div className="bg-black/90 p-4">Welcome to ElloExhibit</div>
      </div>
      <div className="my-10 flex">
        <div className="bg-black/90 p-4">
          {" "}
          ElloExhibit is a monthly showcase of work by designers from the
          Talenthouse platform. All featured Creatives receive a revenue share
          of admission revenue. Artworks can be purchased in the NFT gift shop.
        </div>
      </div>
      <div className="py-10 pr-40 flex border-t">
        <div>
          <div className="uppercase font-bold text-lg">
            Exhibition: FCK 2020 - A celebration of creativity in the face of
            adversity
          </div>
          <div className="">Curated by: H.P. Baxxter (Scooter)</div>
          <div className="italic mt-5">December 16th - January 31st</div>
          <div className="italic mt-5">
            Your ticket to an exclusive virtual exhibition curated by H.P.
            Baxxter of Hamburg rave group Scooter featuring the hottest artwork
            of 2021 from creatives across the Talenthouse and Ello Art sites.
          </div>
          <div className=" mt-5">£10 Admission</div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <a
          href="#"
          className="border px-6 py-4 font-bold hover:bg-white hover:text-black"
        >
          Enter the Exhibition
        </a>
      </div>
    </div>
  );
};
