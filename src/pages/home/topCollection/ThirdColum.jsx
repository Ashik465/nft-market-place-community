import prof1 from "../../../assets/top-collection/prof1.png";
import prof2 from "../../../assets/top-collection/prof2.png";
import prof3 from "../../../assets/top-collection/prof3.png";
import prof4 from "../../../assets/top-collection/prof4.png";
import prof5 from "../../../assets/top-collection/prof5.png";
import verify from "../../../assets/top-collection/verify.png";
import col3 from "../../../assets/top-collection/col3.png";

const ThirdColum = () => {
  return (
    <div className="p-2 md:p-0">
      <h1
        style={{ fontFamily: "Roboto, sans-serif" }}
        className=" font-bold text-2xl"
      >
        Top Collections over{" "}
      </h1>
      <p
        style={{
          fontFamily: "DM Sans, sans-serif",
        }}
        className="text-[#3D00B7] text-xl font-bold pb-5"
      >
        Last 7 days
      </p>
      {/* number start */}
      <div className="flex items-center gap-5 p-4 border-b-2">
        <h1
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
          className=" font-bold text-2xl"
        >
          1
        </h1>
        <div className="relative">
          <img src={prof1} alt="" />
          <img className="absolute -top-2 -right-1" src={verify} alt="" />
        </div>
        <div
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          <h1 className=" font-medium text-xl pb-2">CryptoFunks</h1>
          <div className="flex gap-2">
            <img src={col3} alt="" />
            <p className="text-[#636363] ">19,769.39</p>
          </div>
        </div>

        <h1 className="text-[#14C8B0]  font-bold text-xl">+26.52%</h1>
      </div>

      {/* number 2 */}
      <div className="flex items-center gap-5 p-4 border-b-2">
        <h1
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
          className=" font-bold text-2xl"
        >
          2
        </h1>
        <div>
          <img src={prof2} alt="" />
        </div>
        <div
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          <h1 className=" font-medium text-xl pb-2">Cryptix</h1>
          <div className="flex gap-2">
            <img src={col3} alt="" />
            <p className="text-[#636363] ">19,769.39</p>
          </div>
        </div>

        <h1 className="text-[#FF002E]  font-bold text-xl pl-7">+26.52%</h1>
      </div>
      {/* number 3 */}
      <div className="flex items-center gap-5 p-4 border-b-2">
        <h1
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
          className=" font-bold text-2xl"
        >
          3
        </h1>
        <div>
          <img src={prof3} alt="" />
        </div>
        <div
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          <h1 className=" font-medium text-xl pb-2">Frensware</h1>
          <div className="flex gap-2">
            <img src={col3} alt="" />
            <p className="text-[#636363] ">19,769.39</p>
          </div>
        </div>

        <h1 className="text-[#14C8B0]  font-bold text-xl pl-6">+26.52%</h1>
      </div>
      {/* number 4 */}
      <div className="flex items-center gap-5 p-4 border-b-2">
        <h1
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
          className=" font-bold text-2xl"
        >
          4
        </h1>
        <div className="relative">
          <img src={prof4} alt="" />
          <img className="absolute -top-2 -right-1" src={verify} alt="" />
        </div>
        <div
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          <h1 className=" font-medium text-xl pb-2">PunkArt</h1>
          <div className="flex gap-2">
            <img src={col3} alt="" />
            <p className="text-[#636363] ">19,769.39</p>
          </div>
        </div>

        <h1 className="text-[#14C8B0]  font-bold text-xl pl-7">+26.52%</h1>
      </div>
      {/* number 5 */}
      <div className="flex items-center gap-5 p-4 ">
        <h1
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
          className=" font-bold text-2xl"
        >
          5
        </h1>
        <div>
          <img src={prof5} alt="" />
        </div>
        <div
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          <h1 className=" font-medium text-xl pb-2">Art Crypto</h1>
          <div className="flex gap-2">
            <img src={col3} alt="" />
            <p className="text-[#636363] ">19,769.39</p>
          </div>
        </div>

        <h1 className="text-[#FF002E]  font-bold text-xl  pl-6">+26.52%</h1>
      </div>
    </div>
  );
};

export default ThirdColum;
