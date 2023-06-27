import fast from "../../../assets/banner-image/fast.png";
import growth from "../../../assets/banner-image/growth.png";

const AmazingNFT = () => {
  return (
    <div className="bg-[#D9E0EC21] my-20  backdrop-blur-xl">
      <div className=" container mx-auto  flex flex-col md:flex-row  py-32 px-5 gap-10 xl:gap-28">
        <div className="">
          <h1
            style={{ fontFamily: "Roboto, sans-serif" }}
            className=" font-bold text-4xl "
          >
            The amazing NFT art <br /> of the world here
          </h1>
        </div>

        <div
          className="xl:w-[25%]"
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          <div className="flex gap-2">
            <img src={fast} alt="" />

            <h1 className=" font-bold text-xl ">Fast Transaction</h1>
          </div>

          <p className="text-[#696969] text-base ml-12 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            etiam viverra tellus imperdiet.
          </p>
        </div>
        <div
          className="xl:w-[25%]"
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          <div className="flex gap-2">
            <img src={growth} alt="" />

            <h1 className=" font-bold text-xl ">Growth Transaction</h1>
          </div>

          <p className="text-[#696969] text-base ml-12 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            etiam viverra tellus
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmazingNFT;
