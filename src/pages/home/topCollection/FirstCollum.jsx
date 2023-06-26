import ban1 from "../../../assets/top-collection/ban1.png";
import people from "../../../assets/top-collection/people.png";
import collogo from "../../../assets/top-collection/1stcollogo.svg";

const FirstCollum = () => {
  return (
    <>
      <div className=" p-5 md:p-0 w-96 ">
        <figure>
          <img src={ban1} alt="banner" />
        </figure>
        <div className="  flex justify-between  items-center pt-8">
          <div className="flex justify-center items-center gap-4">
            <img src={people} alt="" />
            <div
              style={{
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              <h1 className="font-bold text-xl pb-1">The Futr Abstr</h1>
              <p className=" text-[#363639] text-xs">10 in the stock</p>
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              <h1 className="font-medium text-[#363639] text-xs pb-1">
                Highest Bid
              </h1>
              <div className="flex justify-center items-center gap-2">
                <img src={collogo} alt="" />
                <p className="  text-xs">0.25 ETH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstCollum;
