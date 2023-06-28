import ban1 from "../../../assets/collection-featured/ban1.png";
import ban2 from "../../../assets/collection-featured/ban2.png";
import ban3 from "../../../assets/collection-featured/ban3.png";
import ban4 from "../../../assets/collection-featured/ban4.png";
import ban5 from "../../../assets/collection-featured/ban5.png";
import ban6 from "../../../assets/collection-featured/ban6.png";
import ban7 from "../../../assets/collection-featured/ban7.png";
import ban8 from "../../../assets/collection-featured/ban8.png";
import ban9 from "../../../assets/collection-featured/ban9.png";
import ban10 from "../../../assets/collection-featured/ban10.png";
import ban11 from "../../../assets/collection-featured/ban11.png";
import ban12 from "../../../assets/collection-featured/ban12.png";
import people from "../../../assets/collection-featured/people.png";

const CollectionFeatured = () => {
  return (
    <div className="bg-[#D9E0EC21] my-20  backdrop-blur-xl ">
      <div className=" container mx-auto  py-32  ">
        <h1
          style={{ fontFamily: "Roboto, sans-serif" }}
          className="pl-5 xl:pl-0  font-bold text-4xl "
        >
          Collection Featured NFTs
        </h1>

        <div className="grid grid-cols-1  xl:grid-cols-3 gap-5 my-10">
          {/* 1st card starts  */}
          <div className="p-5  md:p-0  w-96 ">
            <div className="grid grid-rows-3 grid-flow-col gap-2  ">
              <img className="row-span-3" src={ban1} alt="banner" />
              <img className="col-span-2" src={ban2} alt="" />
              <img className="col-span-2" src={ban3} alt="" />
              <img className="col-span-2" src={ban4} alt="" />
            </div>
            <h1
              style={{
                fontFamily: "DM Sans, sans-serif",
              }}
              className=" font-bold text-xl pt-4"
            >
              Amazing Collection
            </h1>
            <div className="  flex justify-between  items-center pt-2">
              <div className="flex justify-center items-center gap-4">
                <img src={people} alt="" />
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  <h1 className="font-bold text-xl ">by Arkhan</h1>
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  <h1
                    className="font-bold text-[#2639ED] text-xs border-[#2639ED] border-[1px] rounded-full p-2 hover:bg-[#3D00B7]
                  hover:text-white"
                  >
                    Total 54 Items
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* 1st card end */}

          {/* 2nd card  start  */}
          <div className=" p-5 md:p-0 w-96 ">
            <div className="grid grid-rows-3 grid-flow-col gap-2  ">
              <img className="row-span-3" src={ban5} alt="banner" />
              <img className="col-span-2" src={ban6} alt="" />
              <img className="col-span-2" src={ban7} alt="" />
              <img className="col-span-2" src={ban8} alt="" />
            </div>
            <h1
              style={{
                fontFamily: "DM Sans, sans-serif",
              }}
              className=" font-bold text-xl pt-4"
            >
              Amazing Collection
            </h1>
            <div className="  flex justify-between  items-center pt-2">
              <div className="flex justify-center items-center gap-4">
                <img src={people} alt="" />
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  <h1 className="font-bold text-xl ">by Arkhan</h1>
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  <h1
                    className="font-bold text-[#2639ED] text-xs border-[#2639ED] border-[1px] rounded-full p-2 hover:bg-[#3D00B7]
                   hover:text-white"
                  >
                    Total 54 Items
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd card start */}
          <div className="p-5  md:p-0 w-96 ">
            <div className="grid grid-rows-3 grid-flow-col gap-2  ">
              <img className="row-span-3" src={ban9} alt="banner" />
              <img className="col-span-2" src={ban10} alt="" />
              <img className="col-span-2" src={ban11} alt="" />
              <img className="col-span-2" src={ban12} alt="" />
            </div>
            <h1
              style={{
                fontFamily: "DM Sans, sans-serif",
              }}
              className=" font-bold text-xl pt-4"
            >
              Amazing Collection
            </h1>
            <div className="  flex justify-between  items-center pt-2">
              <div className="flex justify-center items-center gap-4">
                <img src={people} alt="" />
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  <h1 className="font-bold text-xl ">by Arkhan</h1>
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  <h1
                    className="font-bold text-[#2639ED] text-xs border-[#2639ED] border-[1px] rounded-full p-2 hover:bg-[#3D00B7]
                   hover:text-white "
                  >
                    Total 54 Items
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card section end */}
      </div>
    </div>
  );
};

export default CollectionFeatured;
