//image
import bannerimg1 from "../../../assets/banner-image/img1.png";
import bannerimg2 from "../../../assets/banner-image/img2.png";
import bannerimg3 from "../../../assets/banner-image/img3.png";
import people from "../../../assets/banner-image/people.png";


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
              transition: "transform 0.2s ease-in-out",
            }}
            className="relative z-10"
          >
            <img  src={bannerimg1} alt="Banner Image 1" />
            <h1 className="absolute top-0 left-4 text-xl font-bold pt-3">
              Abstr Gradient NFT
            </h1>
            <img
              className="absolute  top-0 left-4 pt-12 "
              src={people}
              alt=""
            />
            <p className="absolute  top-0 left-16 pt-12 ">Arkhan17</p>

         
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img  src={bannerimg2} alt="Banner Image 2"  />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={bannerimg3} alt="Banner Image 3" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EffectCardsSlider;
