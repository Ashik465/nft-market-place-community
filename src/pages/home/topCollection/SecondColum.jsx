import ban2 from "../../../assets/top-collection/ban2.png";
import ban3 from "../../../assets/top-collection/ban3.png";
import ban4 from "../../../assets/top-collection/ban4.png";
import people from "../../../assets/top-collection/people.png";
import col2logo from "../../../assets/top-collection/col2.png";

const SecondColum = () => {
  return (
    <>
      <div className="px-10 md:px-0  border-r-2">
        <div className="flex gap-2">
          <img src={ban2} alt="" />
          <div
            style={{
              fontFamily: "DM Sans, sans-serif",
            }}
            className=""
          >
            <h1 className=" font-bold text-xl">The Futr Abstr</h1>
            <div className="flex items-center gap-2 mt-3">
              <img src={people} alt="" />
              <div className="flex gap-1 border-[1px] border-[#00AC4F] p-1 rounded-md">
                <img src={col2logo} alt="" />
                <p className=" text-[#00AC4F] font-bold text-xs md:text-base">
                  0.25 ETH
                </p>
              </div>
              <p className=" text-[#757575] text-xs md:text-base">1 of 8</p>
            </div>
            <a
              style={{
                fontFamily: "DM Sans, sans-serif",
                transition: "transform 0.2s ease-in-out",
              }}
              className=" btn-second-main mt-6"
            >
              Place a bid
            </a>
          </div>
        </div>
      </div>
      {/* //2nd card */}
      <div className="px-10 md:px-0 pt-5 border-r-2">
        <div className="flex gap-2">
          <img src={ban3} alt="" />
          <div
            style={{
              fontFamily: "DM Sans, sans-serif",
            }}
            className=""
          >
            <h1 className=" font-bold text-xl">The Futr Abstr</h1>
            <div className="flex items-center gap-2 mt-3">
              <img src={people} alt="" />
              <div className="flex gap-1 border-[1px] border-[#00AC4F] p-1 rounded-md">
                <img src={col2logo} alt="" />
                <p className=" text-[#00AC4F] font-bold text-xs md:text-base">
                  0.25 ETH
                </p>
              </div>
              <p className=" text-[#757575] text-xs md:text-base">1 of 8</p>
            </div>
            <a
              style={{
                fontFamily: "DM Sans, sans-serif",
                transition: "transform 0.2s ease-in-out",
              }}
              className=" btn-second-main mt-6"
            >
              Place a bid
            </a>
          </div>
        </div>
      </div>
      {/* 3rd card */}
      <div className="px-10 md:px-0 pt-5 border-r-2">
        <div className="flex gap-2">
          <img src={ban4} alt="" />
          <div
            style={{
              fontFamily: "DM Sans, sans-serif",
            }}
            className=""
          >
            <h1 className=" font-bold text-xl">The Futr Abstr</h1>
            <div className="flex items-center gap-2 mt-3">
              <img src={people} alt="" />
              <div className="flex gap-1 border-[1px] border-[#00AC4F] p-1 rounded-md">
                <img src={col2logo} alt="" />
                <p className=" text-[#00AC4F] font-bold text-xs md:text-base">
                  0.25 ETH
                </p>
              </div>
              <p className=" text-[#757575] text-xs md:text-base">1 of 8</p>
            </div>
            <a
              style={{
                fontFamily: "DM Sans, sans-serif",
                transition: "transform 0.2s ease-in-out",
              }}
              className=" btn-second-main mt-6"
            >
              Place a bid
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondColum;
