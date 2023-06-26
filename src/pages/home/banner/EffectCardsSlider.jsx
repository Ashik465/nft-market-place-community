//image
import bannerimg1 from "../../../assets/banner-image/img1.png";
import bannerimg2 from "../../../assets/banner-image/img2.png";
import bannerimg3 from "../../../assets/banner-image/img3.png";
import people from "../../../assets/banner-image/people.png";
import middle from "../../../assets/banner-image/middle.png";

// swipper slider css
import "./CardStyle.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";

const EffectCardsSlider = () => {
  return (
    <div className=" ">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <div
            style={{
              fontFamily: "DM Sans, sans-serif",
            }}
            className="relative "
          >
            <img src={bannerimg1} alt="Banner Image 1" />
            <h1 className="absolute top-0 left-4 text-xl font-bold pt-3">
              Abstr Gradient NFT
            </h1>
            <img
              className="absolute  top-0 left-4 pt-12 "
              src={people}
              alt=""
            />
            <p className="absolute  top-0 left-16 pt-12 ">Arkhan17</p>
            {/* // bottom part */}
            <div className="absolute  bottom-6 left-2  bg-[#FFFFFF33] rounded-lg backdrop-blur-xl p-5">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-xs ">Current Bid</h1>
                  <div className="flex items-center justify-center gap-2">
                    <img className="" src={middle} alt="" />
                    <h1 className="text-base ">0.25 ETH</h1>
                  </div>
                </div>

                <div className="ml-10">
                  <h1 className="text-xs">Ends in</h1>

                  <h1 className="text-base ">12h 43m 42s</h1>
                </div>
              </div>
            </div>
            {/* bottom part ends  */}
          </div>
        </SwiperSlide>
        {/* 2nd slider image  */}
        <SwiperSlide>
          <div style={{
              fontFamily: "DM Sans, sans-serif",
            }}
            className="relative ">
            <img src={bannerimg2} alt="Banner Image 2" />
            <h1 className="absolute top-0 left-4 text-xl font-bold pt-3">
              Orange Gradient NFT
            </h1>
            <img
              className="absolute  top-0 left-4 pt-12 "
              src={people}
              alt=""
            />
            <p className="absolute  top-0 left-16 pt-12 ">Ashik</p>
            {/* // bottom part */}
            <div className="absolute  bottom-6 left-2  bg-[#FFFFFF33] rounded-lg backdrop-blur-xl p-5">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-xs ">Current Bid</h1>
                  <div className="flex items-center justify-center gap-2">
                    <img className="" src={middle} alt="" />
                    <h1 className="text-base ">0.60 ETH</h1>
                  </div>
                </div>

                <div className="ml-10">
                  <h1 className="text-xs">Ends in</h1>

                  <h1 className="text-base ">10h 30m 22s</h1>
                </div>
              </div>
            </div>
            {/* bottom part ends  */}
          </div>
        </SwiperSlide>
        {/* third slider image  */}
        <SwiperSlide>
          <div style={{
              fontFamily: "DM Sans, sans-serif",
            }}
            className="relative ">
            <img src={bannerimg3} alt="Banner Image 3" />
            <h1 className="absolute top-0 left-4 text-xl font-bold pt-3">
              Red Gradient NFT
            </h1>
            <img
              className="absolute  top-0 left-4 pt-12 "
              src={people}
              alt=""
            />
            <p className="absolute  top-0 left-16 pt-12 ">Ratul</p>
            {/* // bottom part */}
            <div className="absolute  bottom-6 left-2  bg-[#FFFFFF33] rounded-lg backdrop-blur-xl p-5">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-xs ">Current Bid</h1>
                  <div className="flex items-center justify-center gap-2">
                    <img className="" src={middle} alt="" />
                    <h1 className="text-base ">0.50 ETH</h1>
                  </div>
                </div>

                <div className="ml-10">
                  <h1 className="text-xs">Ends in</h1>

                  <h1 className="text-base ">11h 45m 22s</h1>
                </div>
              </div>
            </div>
            {/* bottom part ends  */}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EffectCardsSlider;
