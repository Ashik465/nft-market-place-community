import col2logo from "../../../assets/top-collection/col2.png";
import people1 from "../../../assets/discover-more/people1.png";
import people2 from "../../../assets/discover-more/people2.png";
import people3 from "../../../assets/discover-more/people3.png";
import people4 from "../../../assets/discover-more/people4.png";
const CardNFT = ({ nft }) => {
  const { picture, name } = nft || {};
  return (
    <>
      <div className=" bg-white rounded-2xl p-5 border-[1px]  border-[#F2F2F280]  w-72 ">
        <div className="relative">
          <img src={picture} alt="banner" />
          <img className="absolute left-2 -bottom-4" src={people1} alt="" />
          <img className="absolute left-7 -bottom-4" src={people2} alt="" />
          <img
            className="absolute left-[50px] -bottom-4"
            src={people3}
            alt=""
          />
          <img
            className="absolute left-[70px] -bottom-4"
            src={people4}
            alt=""
          />
        </div>
        <div className="pl-2">
          <h1
            style={{
              fontFamily: "DM Sans, sans-serif",
            }}
            className=" font-bold text-xl pt-5"
          >
            {name}
          </h1>

          <div className="  flex justify-between  items-center pt-2 pb-4 border-[#F4F4F4] border-b-[1px] ">
            <div className="flex items-center gap-1  ">
              <img className="h-5" src={col2logo} alt="" />
              <p className=" text-[#00AC4F] font-bold text-xs md:text-base">
                0.25 ETH
              </p>
            </div>

            <div>
              <p className=" text-[#757575] text-xs md:text-base">1 of 321</p>
            </div>
          </div>
          <div
            style={{
              fontFamily: "DM Sans, sans-serif",
            }}
            className="  flex justify-between  items-center  my-3 "
          >
            <div className="bg-[#DCDCDC33]  rounded-full px-4 py-1 text-base text-[#5539A8] font-medium hover:bg-[#3D00B7] hover:text-white cursor-pointer  ">
              3h 50m 2s left
            </div>

            <div>
              <p className=" text-[#4F33A3] cursor-pointer text-base    font-medium hover:text-black">
                Place a bid
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardNFT;
