import React from "react";
import Review from "./Review";
import RateReviewIcon from '@mui/icons-material/RateReview';


function ReviewStrucure() {
    return <>
        <div className="flex flex-col md:flex-row p-10  mb-10">
  <div className="w-full md:w-1/2 flex flex-col justify-center  pl-0 md:pl-10 mb-5 md:mb-0">
  <h2 className="text-2xl font-black text-head">Testimonials</h2>
    <h1 className="text-3xl md:text-4xl font-black text-head text-center md:text-left">
      What Our Clients Say
    </h1>
    <p className="text-xl font-font-bold mt-10 text-head2">Great customer service is the heart of our business. Hear from our happy customers who kindly shared their opinion.</p>
  </div>
  <div className="w-full md:w-1/2">
    <Review />
  </div>
</div>

    </>
}

export default ReviewStrucure;